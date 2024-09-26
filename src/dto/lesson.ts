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
