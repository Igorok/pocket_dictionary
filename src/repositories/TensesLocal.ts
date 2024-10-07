import type { TenseDescription, TenseSentence } from '../dto/course';
import tensesJson from '../data/english_tenses.json' with { type: 'json' };

class TensesRepository {
    getDescriptions(): TenseDescription[] {
        return tensesJson.description;
    }

    getSentences({ tense_id }: { tense_id?: string }): TenseSentence[] {
        if (!tense_id) {
            return tensesJson.sentences;
        }
        return tensesJson.sentences.filter((sentence) => sentence.tense_id === tense_id);
    }
}

let repository: TensesRepository;
export const getTensesRepository = (): TensesRepository => {
    if (!repository) {
        repository = new TensesRepository();
    }
    return repository;
};
