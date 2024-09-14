import type { Firestore } from 'firebase/firestore';
import { doc, setDoc } from 'firebase/firestore';

/*
// Add a new document in collection "cities"
await setDoc(doc(db, "cities", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA"
});
*/

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
