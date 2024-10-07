import type { Word, IrregularVerb } from '../dto/course';
import wordsJson from '../data/merged.json' with { type: 'json' };
import verbsJson from '../data/verbs.json' with { type: 'json' };

class WordsRepository {
    getAllWords({ topic }: { topic?: string }): Word[] {
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

    getVerbs(): IrregularVerb[] {
        return verbsJson.map((verb) => ({
            ...verb,
            id: verb.id.toString()
        }));
    }
}

let repository: WordsRepository;
export const getWordsRepository = (): WordsRepository => {
    if (!repository) {
        repository = new WordsRepository();
    }
    return repository;
};
