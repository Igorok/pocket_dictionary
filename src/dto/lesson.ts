export type LessonWriteWord = {
    id: string;
    word: string;
    tr_ru: string;
    error: boolean;
    success: boolean;
    active: boolean;
};

export type LessonWriteData = {
    title: string,
    word: string,
    tr_ru: string,
    write_1: string,
    write_2: string,
    write_3: string,
    write: boolean,
    check: boolean,
    words: LessonWriteWord[],
    completed: boolean
};

export type LessonWriteVerb = {
    id: string;
    base_form: string;
    past_simple: string;
    past_participle: string;
    tr_ru: string;
    error: boolean;
    success: boolean;
    active: boolean;
};

export type LessonWriteVerbData = {
    title: string,
    write_base_form: string,
    write_past_simple: string,
    write_past_participle: string,
    write: boolean,
    check: boolean,
    verbs: LessonWriteVerb[],
    completed: boolean
};
