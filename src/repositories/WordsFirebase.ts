import type { Firestore } from 'firebase/firestore';
import { doc, setDoc } from 'firebase/firestore';

class WordsRepository {
    db: Firestore;

    constructor(db: Firestore) {
        this.db = db;
    }
}

let repository: WordsRepository;
export const getWordsRepository = (db: Firestore): WordsRepository => {
    if (!repository && db) {
        repository = new WordsRepository(db);
    }
    return repository;
};
