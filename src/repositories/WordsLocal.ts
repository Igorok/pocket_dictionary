import words from '../data/merged.json' with { type: 'json' };

class WordsRepository {
    constructor() {
    }
}

let repository: WordsRepository;
export const getWordsRepository = (): WordsRepository => {
    if (!repository) {
        repository = new WordsRepository();
    }
    return repository;
};
