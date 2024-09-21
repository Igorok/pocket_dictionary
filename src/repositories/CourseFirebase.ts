import { shuffle } from 'lodash';
import type { Course, StudentCourse, Word, StudentWord } from '../dto/course';
import type { Firestore } from 'firebase/firestore';
import {
    collection,
    getDocs,
    getDoc,
    updateDoc,
    setDoc,
    doc
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
        if (!topic) return wordsJson;

        return wordsJson.filter(({ topics }) => topics.includes(topic));
    }

    async joinCourse(param: StudentCourse): Promise<StudentCourse> {
        const { course_id, student_id, title, type, topic, updated_at } = param;

        const wordsForTopic: StudentWord[] = [];
        for (const item of wordsJson) {
            if (!item.topics.includes(topic)) {
                continue;
            }
            wordsForTopic.push({
                word: item.word,
                errors: 0,
                learned_at: 0
            });
        }

        const studentCourse: StudentCourse = {
            course_id,
            student_id,
            title,
            type,
            topic,
            updated_at,
            words: shuffle(wordsForTopic)
        };
        const id = `${course_id}_${student_id}`;

        await setDoc(doc(this.db, 'student_courses', id), studentCourse);

        studentCourse.id = id;

        return studentCourse;
    }

    async getStudentCourses(student_id: string): Promise<StudentCourse[]> {
        const querySnapshot = await getDocs(
            collection(this.db, 'student_courses')
        );
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
                words
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
                words
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
