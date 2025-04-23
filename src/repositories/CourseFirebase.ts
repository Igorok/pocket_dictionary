import { shuffle } from 'lodash';
import type {
    Course,
    StudentCourse,
    StudentWord,
    StudentWordDb,
    StudentCourseDb
} from '../dto/course';
import type { CourseStats, StudentDailyStats, StudentStats } from '../dto/student';
import type { Firestore } from 'firebase/firestore';
import {
    collection,
    getDocs,
    getDoc,
    updateDoc,
    setDoc,
    doc,
    where,
    query
} from 'firebase/firestore';

import coursesJson from '../data/courses.json' with { type: 'json' };

class CourseRepository {
    db: Firestore;

    constructor(db: Firestore) {
        this.db = db;
    }

    getCourses({ type }: { type?: string }): Course[] {
        if (type) {
            return coursesJson.filter((course) => course.type === type);
        }
        return coursesJson;
    }

    getCourseById(id: string): Course | undefined {
        return coursesJson.find((course) => course.id === id);
    }

    async joinCourse(param: StudentCourseDb): Promise<StudentCourse> {
        const { course_id, student_id, title, type, topic, updated_at, words } =
            param;
        const id = `${course_id}_${student_id}`;
        const studentCourse: StudentCourseDb = {
            id,
            course_id,
            student_id,
            title,
            type,
            topic,
            updated_at,
            words: shuffle(words)
        };

        await setDoc(doc(this.db, 'student_courses', id), studentCourse);

        return {
            id,
            course_id,
            student_id,
            title,
            type,
            topic,
            updated_at,
            words: words.map(({ id, e, l_at }) => {
                return {
                    id,
                    errors: e,
                    learned_at: l_at
                };
            })
        };
    }

    async getStudentCourses(student_id: string): Promise<StudentCourse[]> {
        const q = query(
            collection(this.db, 'student_courses'),
            where('student_id', '==', student_id)
        );

        const querySnapshot = await getDocs(q);
        const courses: StudentCourse[] = [];
        querySnapshot.forEach((doc) => {
            const id = doc.id;
            const {
                course_id,
                student_id,
                title,
                type,
                topic,
                updated_at,
                words
            } = doc.data();

            courses.push({
                id,
                course_id,
                student_id,
                title,
                type,
                topic,
                updated_at,
                words: words.map(({ id, e, l_at }: StudentWordDb) => {
                    return {
                        id,
                        errors: e,
                        learned_at: l_at
                    };
                })
            });
        });
        return courses;
    }

    async getStudentCourseById(
        student_course_id: string
    ): Promise<StudentCourse> {
        const docRef = doc(this.db, 'student_courses', student_course_id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const {
                course_id,
                student_id,
                title,
                type,
                topic,
                updated_at,
                words
            } = docSnap.data();

            return {
                id: docSnap.id,
                course_id,
                student_id,
                title,
                type,
                topic,
                updated_at,
                words: words.map(({ id, e, l_at }: StudentWordDb) => {
                    return {
                        id,
                        errors: e,
                        learned_at: l_at
                    };
                })
            };
        } else {
            throw new Error('No such document!');
        }
    }

    async updateStudentCourseWords(
        student_course_id: string,
        words: StudentWord[]
    ): Promise<void> {
        const dbWords: StudentWordDb[] = words.map(
            ({ id, errors, learned_at }) => ({
                id,
                e: errors,
                l_at: learned_at
            })
        );
        const docRef = doc(this.db, 'student_courses', student_course_id);
        await updateDoc(docRef, { words: dbWords });
    }

    async getStudentStats(student_id: string): Promise<StudentStats> {
        const q = query(
            collection(this.db, 'student_stats'),
            where('student_id', '==', student_id)
        );

        let stats: StudentStats = {
            student_id,
            days: [],
        };
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const { days = [] } = doc.data();
            stats.days = days;
            return;
        });

        stats.days = stats.days.sort((a, b) => Date.parse(b.day) - Date.parse(a.day));

        return stats;
    }

    async updateStudentStats({
        student_id,
        course_id,
        success,
        error
    }: {
        student_id: string;
        course_id: string;
        success: number;
        error: number;
    }): Promise<void> {
        const todayKey = new Date().toLocaleDateString('en-EN');
        const userStats: StudentStats = await this.getStudentStats(student_id);
        let { days } = userStats;
        if (days.length > 30) {
            days= days.slice(days.length - 30);
        }

        const todayObj: StudentDailyStats | undefined = days.find(({ day }) => day === todayKey);
        if (!todayObj) {
            days.unshift({
                day: todayKey,
                stats: [{
                    id: course_id,
                    e: error,
                    s: success,
                }],
            });

            return setDoc(doc(this.db, 'student_stats', student_id), {
                days,
                student_id
            });
        }

        const courseStats: CourseStats | undefined = todayObj.stats.find(({ id }) => id === course_id);

        if (!courseStats) {
            todayObj.stats.push({
                id: course_id,
                e: error,
                s: success,
            });
        } else {
            courseStats.e += error;
            courseStats.s += success;
        }

        return setDoc(doc(this.db, 'student_stats', student_id), {
            days,
            student_id
        });
    }
}

let repository: CourseRepository;
export const getCourseRepository = (db?: Firestore): CourseRepository => {
    if (!repository && db) {
        repository = new CourseRepository(db);
    }
    return repository;
};
