import type { CourseDescription, Sentence } from '../dto/course';
import englishSentencesJson from '../data_local/english/sentences.json' with { type: 'json' };
import englishDescriptionJson from '../data_local/english/cources_description.json' with { type: 'json' };

type SentencesByLang = {
    [key:string]: Sentence[],
};

type DescriptionsByLang = {
    [key:string]: CourseDescription[],
};

const sentencesByLang: SentencesByLang = {
    english: englishSentencesJson,
};

const descriptionByLang: DescriptionsByLang = {
    english: englishDescriptionJson,
};


const getDescriptionByTopic = ({ language, topic }: { language: string, topic: string }): CourseDescription|undefined => {
    const descriptions: CourseDescription[] = descriptionByLang[language] ?? [];
    return descriptions.find((val) => val.topic === topic);
}

const getSentences = ({ language, topic }: { language: string, topic?: string }): Sentence[] => {
    const sentences: Sentence[] = sentencesByLang[language] ?? [];

    if (topic) {
        return sentences.filter((sentence) => sentence.topics.includes(topic));
    }
    return sentences;
}

export const sentencesDao = {
    getDescriptionByTopic,
    getSentences,
};