import type { Word } from '../dto/course';
import wordsJson from '../data/merged.json' with { type: 'json' };

class WordsRepository {
    getAllWords({ topic }: { topic?: string }): Word[] {
        if (!topic) {
            return wordsJson;
        }

        return wordsJson.filter(({ topics }) => topics.includes(topic));
    }
}

let repository: WordsRepository;
export const getWordsRepository = (): WordsRepository => {
    if (!repository) {
        repository = new WordsRepository();
    }
    return repository;
};
