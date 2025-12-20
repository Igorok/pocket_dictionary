import type { Word } from '../dto/course';
import wordsEnglish from '../data_local/english/words.json' with { type: 'json' };
import wordsSpanish from '../data_local/spanish/words.json' with { type: 'json' };

type WordsByLang = {
    [key: string]: Word[];
};

const wordsByLang: WordsByLang = {
    english: wordsEnglish,
    spanish: wordsSpanish,
};

const getAllWords = ({ topic, language }: { topic?: string, language: string }): Word[] => {
    const words = wordsByLang[language];
    if (!topic) {
        return words;
    }

    return words.filter(({ topics }) => topics.includes(topic));
};

export const wordsDao = {
    getAllWords,
};