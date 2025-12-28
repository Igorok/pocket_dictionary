import type {
    Course,
    StudentCourse,
    StudentWord,
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

import coursesEnglish from '../data_local/english/courses.json' with { type: 'json' };
import coursesSpanish from '../data_local/spanish/courses.json' with { type: 'json' };

type CourcesByLang = {
    [key:string]: Course[],
};

const coursesByLang: CourcesByLang = {
    english: coursesEnglish,
    spanish: coursesSpanish,
};
const coursesById = new Map();
for (const course of coursesEnglish) {
    coursesById.set(course.id, course);
}
for (const course of coursesSpanish) {
    coursesById.set(course.id, course);
}

const LIMIT: number = 30;

class CourseDao {
    db: Firestore;

    constructor(db: Firestore) {
        this.db = db;
    }

    getCourses({ type, language }: { type?: string, language?: string }): Course[] {
        const courses: Course[] = language
            ? coursesByLang[language]
            : [...coursesEnglish, ...coursesSpanish];
        if (type) {
            return courses.filter((course) => course.type === type);
        }
        return courses;
    }

    getCourseById(id: string): Course | undefined {
        return coursesById.get(id);
    }

    async joinCourse(param: StudentCourse): Promise<StudentCourse> {
        const { course_id, student_id, title, type, topic, updated_at, words } =
            param;
        const id = `${course_id}_${student_id}`;

        await setDoc(doc(this.db, 'student_courses', id), param);

        return {
            id,
            course_id,
            student_id,
            title,
            type,
            topic,
            updated_at,
            words,
        };
    }

    async getStudentCourses(studentId: string): Promise<StudentCourse[]> {
        const q = query(
            collection(this.db, 'student_courses'),
            where('student_id', '==', studentId)
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
                words,
            });
        });
        return courses;
    }

    async getStudentCourseById(
        studentCourseId: string
    ): Promise<StudentCourse> {
        const docRef = doc(this.db, 'student_courses', studentCourseId);
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
                words,
            };
        } else {
            throw new Error('No such document!');
        }
    }

    async updateStudentCourseWords(
        student_course_id: string,
        words: StudentWord[]
    ): Promise<void> {
        const docRef = doc(this.db, 'student_courses', student_course_id);
        await updateDoc(docRef, { words });
    }

    async getStudentStats(studentId: string): Promise<StudentStats> {
        const q = query(
            collection(this.db, 'student_stats'),
            where('student_id', '==', studentId)
        );

        let stats: StudentStats = {
            student_id: studentId,
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
        studentId,
        courseId,
        success,
        error
    }: {
        studentId: string;
        courseId: string;
        success: number;
        error: number;
    }): Promise<void> {
        const todayKey = new Date().toLocaleDateString('en-EN');
        const userStats: StudentStats = await this.getStudentStats(studentId);
        let { days } = userStats;
        if (days.length > LIMIT) {
            days= days.slice(0, LIMIT);
        }

        const todayObj: StudentDailyStats | undefined = days.find(({ day }) => day === todayKey);
        if (!todayObj) {
            days.unshift({
                day: todayKey,
                stats: [{
                    id: courseId,
                    e: error,
                    s: success,
                }],
            });

            return setDoc(doc(this.db, 'student_stats', studentId), {
                days,
                student_id: studentId,
            });
        }

        const courseStats: CourseStats | undefined = todayObj.stats.find(({ id }) => id === courseId);

        if (!courseStats) {
            todayObj.stats.push({
                id: courseId,
                e: error,
                s: success,
            });
        } else {
            courseStats.e += error;
            courseStats.s += success;
        }

        return setDoc(doc(this.db, 'student_stats', studentId), {
            days,
            student_id: studentId,
        });
    }
}

let courseDao: CourseDao;
export const getCourseDao = (db?: Firestore): CourseDao => {
    if (!courseDao && db) {
        courseDao = new CourseDao(db);
    }
    return courseDao;
};
