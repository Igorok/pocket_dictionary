import { shuffle } from 'lodash';
import type {
    Course,
    StudentCourse,
    Word,
    StudentWord,
    StudentWordDb
} from '../dto/course';
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
import wordsJson from '../data/merged.json' with { type: 'json' };

class CourseRepository {
    db: Firestore;

    constructor(db: Firestore) {
        this.db = db;
    }

    async getAllCourses(): Promise<Course[]> {
        return coursesJson;
    }

    async getCourseById(id: string): Promise<Course | undefined> {
        return coursesJson.find((course) => course.id === id);
    }

    async getAllWords({
        topic
    }: {
        topic: string | undefined;
    }): Promise<Word[]> {
        if (!topic) {
            return wordsJson.map((word) => ({
                ...word,
                id: word.id.toString()
            }));
        }

        return wordsJson
            .filter(({ topics }) => topics.includes(topic))
            .map((word) => ({
                ...word,
                id: word.id.toString()
            }));
    }

    async joinCourse(param: StudentCourse): Promise<StudentCourse> {
        const { course_id, student_id, title, type, topic, updated_at } = param;

        const wordsForTopic: StudentWordDb[] = [];
        for (const item of wordsJson) {
            if (!item.topics.includes(topic)) {
                continue;
            }
            wordsForTopic.push({
                id: item.id.toString(),
                e: 0,
                l_at: 0
            });
        }

        const id = `${course_id}_${student_id}`;
        const studentCourse: StudentCourse = {
            id,
            course_id,
            student_id,
            title,
            type,
            topic,
            updated_at,
            words: shuffle(wordsForTopic)
        };

        await setDoc(doc(this.db, 'student_courses', id), studentCourse);

        studentCourse.words = wordsForTopic.map(({ id, e, l_at }) => {
            return {
                id,
                errors: e,
                learned_at: l_at
            };
        });

        return studentCourse;
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
                words: words.map(({ id, e, l_at }) => {
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
                words: words.map(({ id, e, l_at }) => {
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

    async getUserStats(student_id: string) {
        const q = query(
            collection(this.db, 'student_stats'),
            where('student_id', '==', student_id)
        );

        let stats = {
            id: student_id,
            student_id,
            byDay: {}
        };
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const { byDay } = doc.data();
            stats.id = doc.id;
            stats.byDay = byDay;
            return;
        });
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
        const userStats = await this.getUserStats(student_id);
        const { byDay } = userStats;

        console.log('userStats', userStats);

        const today = new Date().toLocaleDateString('en-EN');
        byDay[today] = byDay[today] || {};
        byDay[today][course_id] = byDay[today][course_id] || {
            e: 0,
            s: 0
        };
        byDay[today][course_id].e += error;
        byDay[today][course_id].s += success;

        await setDoc(doc(this.db, 'student_stats', student_id), {
            byDay,
            student_id
        });
    }
}

let repository: CourseRepository;
export const getCourseRepository = (
    db: Firestore | undefined
): CourseRepository => {
    if (!repository && db) {
        repository = new CourseRepository(db);
    }
    return repository;
};
