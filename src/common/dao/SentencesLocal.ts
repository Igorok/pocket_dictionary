import type { SentenceDescription, Sentence } from '../dto/course';
import englishJson from '../data_local/english/sentences.json' with { type: 'json' };

type SenteceData = {
    description: SentenceDescription[],
    sentences: Sentence[],
}

type DataByLang = {
    [key:string]: SenteceData,
};

const courcesByLang: DataByLang = {
    english: englishJson,
};

const getDescriptions = ({ language, topic }: { language: string, topic?: string }): SentenceDescription[] => {
    const data: SenteceData = courcesByLang[language];

    if (topic) {
        return data.description.filter((val) => val.topic === topic);
    }
    return data.description;
}

const getSentences = ({ language, subTopicIds }: { language: string, subTopicIds?: string[] }): Sentence[] => {
    const data: SenteceData = courcesByLang[language];

    if (subTopicIds?.length) {
        return data.sentences.filter((sentence) =>
            subTopicIds.includes(sentence.topic_id)
        );
    }
    return data.sentences;
}

export const sentencesDao = {
    getDescriptions,
    getSentences,
};