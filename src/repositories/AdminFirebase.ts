import type { Firestore } from 'firebase/firestore';
import { doc, setDoc, writeBatch } from 'firebase/firestore';

import allWords from '../data/merged.json' with { type: 'json' };

/*
// Add a new document in collection "cities"
await setDoc(doc(db, "cities", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA"
});
*/

class AdminRepository {
    db: Firestore;

    constructor(db: Firestore) {
        this.db = db;
    }

    async importAllWords() {
        return;

        const batch = writeBatch(this.db);

        allWords.forEach(({ word, topics, tr_ru }) => {
            const wordRef = doc(this.db, 'words', word);
            batch.set(wordRef, { word, topics, tr_ru });
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
