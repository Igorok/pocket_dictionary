import type { Firestore } from 'firebase/firestore';
import { doc, setDoc, writeBatch } from 'firebase/firestore';
import allWords from '../data/merged.json' with { type: 'json' };

class AdminRepository {
    db: Firestore;

    constructor(db: Firestore) {
        this.db = db;
    }

    async importAllWords() {
        const batch = writeBatch(this.db);

        allWords.forEach(({ word, topics, tr_ru }) => {
            const wordRef = doc(this.db, 'words', word);
            batch.set(wordRef, { word, topics, tr_ru });
        });

        await batch.commit();
    }

    async importCourses() {
        const topics = new Set();
        allWords.forEach(({ topics: t }) => {
            topics.add(t[0]);
        });

        const courses = [];
        topics.forEach((topic) => {
            courses.push({
                title: topic,
                type: 'words',
                updated_at: Date.now(),
                topic
            });
        });

        console.log('courses', courses);

        const batch = writeBatch(this.db);

        courses.forEach((course) => {
            const { title, type, updated_at, topic } = course;

            const courseRef = doc(this.db, 'courses', topic);
            batch.set(courseRef, {
                title,
                type,
                updated_at,
                topic
            });
        });

        await batch.commit();
    }
}

let repository: AdminRepository;
export const getAdminRepository = (db: Firestore): AdminRepository => {
    if (!repository && db) {
        repository = new AdminRepository(db);
    }
    return repository;
};
