import type { TenseDescription, TenseSentence } from '../dto/course';
import tensesJson from '../data/english_tenses.json' with { type: 'json' };

class TensesRepository {
    getDescriptions({ topic }: { topic?: string }): TenseDescription[] {
        if (topic) {
            return tensesJson.description.filter(
                ({ tense }) => tense === topic
            );
        }
        return tensesJson.description;
    }

    getSentences({ tenseIds }: { tenseIds?: string[] }): TenseSentence[] {
        if (tenseIds?.length) {
            return tensesJson.sentences.filter((sentence) =>
                tenseIds.includes(sentence.tense_id)
            );
        }
        return tensesJson.sentences;
    }
}

let repository: TensesRepository;
export const getTensesRepository = (): TensesRepository => {
    if (!repository) {
        repository = new TensesRepository();
    }
    return repository;
};
