import type { IrregularVerb } from '../dto/course';
import verbsJson from '../data/verbs.json' with { type: 'json' };

class VerbsRepository {
    getVerbs(): IrregularVerb[] {
        return verbsJson;
    }
}

let repository: VerbsRepository;
export const getVerbsRepository = (): VerbsRepository => {
    if (!repository) {
        repository = new VerbsRepository();
    }
    return repository;
};
