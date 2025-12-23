export type Word = {
    id: string;
    word: string;
    tr_ru: string;
    topics: string[];
    updated_at?: number;
};

export type StudentWord = {
    id: string;
    e: number;
    l_at: number;
};

export type Course = {
    id: string;
    title: string;
    topic: string;
    type: string;
    updated_at: number;
};

export type StudentCourse = {
    id?: string;
    title: string;
    topic: string;
    type: string;
    updated_at: number;
    course_id: string;
    student_id: string;
    words: StudentWord[];
};

export type IrregularVerb = {
    id: string;
    base_form: string;
    past_simple: string;
    past_participle: string;
    tr_ru: string;
};

export type _SentenceDescription = {
    id: string;
    topic: string;
    title: string;
    description: string[];
};

export type _Sentence = {
    id: string;
    topic_id: string;
    sentence: string;
    tr_ru: string;
    words: string[];
};

export type Sentence = {
    id: string;
    topics: string[];
    sentence: string;
    tr_ru: string;
    hint?: string;
};

export type SentenceCourseDescription = {
    id: string;
    topic: string;
    title: string;
    descriptions: string[];
};
