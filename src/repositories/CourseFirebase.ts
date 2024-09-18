import type { Course, StudentCourse } from '../dto/course';
import type { Firestore } from 'firebase/firestore';
import {
    collection,
    getDocs,
    addDoc,
    query,
    where,
    writeBatch,
    doc
} from 'firebase/firestore';

class CourseRepository {
    db: Firestore;

    constructor(db: Firestore) {
        this.db = db;
    }

    async getAllCourses(): Promise<Course[]> {
        const querySnapshot = await getDocs(collection(this.db, 'courses'));
        const courses: Course[] = [];
        querySnapshot.forEach((doc) => {
            const id = doc.id;
            const { title, type, topic, updated_at } = doc.data();
            courses.push({
                id,
                title,
                type,
                topic,
                updated_at
            });
        });
        return courses;
    }

    async getStudentCourses(student_id: string): Promise<StudentCourse[]> {
        const querySnapshot = await getDocs(
            collection(this.db, 'student_courses')
        );
        const courses: StudentCourse[] = [];
        querySnapshot.forEach((doc) => {
            const id = doc.id;
            const { course_id, student_id, title, type, topic, updated_at } =
                doc.data();
            courses.push({
                id,
                course_id,
                student_id,
                title,
                type,
                topic,
                updated_at
            });
        });
        return courses;
    }

    async joinCourse(param: StudentCourse): Promise<any> {
        let oldCourse;

        const qc = query(
            collection(this.db, 'student_courses'),
            where('course_id', '==', param.course_id),
            where('student_id', '==', param.student_id)
        );
        const queryCourseSnapshot = await getDocs(qc);
        if (!queryCourseSnapshot.empty) {
            throw new Error('Course is already joined!');
        }

        const newCourse = await addDoc(
            collection(this.db, 'student_courses'),
            param
        );

        const words = [];
        const qw = query(
            collection(this.db, 'words'),
            where('topic', '==', param.topic)
        );
        const queryWordsSnapshot = await getDocs(qw);
        queryWordsSnapshot.forEach((doc) => {
            console.log('doc.data()', doc.data());

            const { word, tr_ru } = doc.data();
            words.push({
                student_course_id: newCourse.id,
                word,
                tr_ru,
                errors: 0,
                learn_at: 0
            });
        });

        for (const word of words) {
            console.log('word', word);

            // await addDoc(collection(this.db, "student_words"), word);
        }

        console.log('joinCourse');
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
