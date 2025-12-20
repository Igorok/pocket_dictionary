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

export type TestWordsItemOption = {
    id: string;
    word: string;
    tr_ru: string;
    error: boolean;
    success: boolean;
};
export type TestWordsItem = {
    word: Word;
    options: TestWordsItemOption[];
    success: boolean;
    completed: boolean;
    active: boolean;
};

export type TestWordsLesson = {
    title: string;
    words: TestWordsItem[];
    completed: boolean;
};

export type IrregularVerb = {
    id: string;
    base_form: string;
    past_simple: string;
    past_participle: string;
    tr_ru: string;
};

export type SentenceDescription = {
    id: string;
    topic: string;
    title: string;
    description: string[];
};

export type Sentence = {
    id: string;
    topic_id: string;
    sentence: string;
    tr_ru: string;
    words: string[];
};
