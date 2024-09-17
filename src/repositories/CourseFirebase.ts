import type { Course } from '../dto/course';
import type { Firestore } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';

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
                id, title, type, topic, updated_at,
            });
        });
        return courses;
    }
}

let repository: CourseRepository;
export const getCourseRepository = (db: Firestore): CourseRepository => {
    if (!repository && db) {
        repository = new CourseRepository(db);
    }
    return repository;
};
