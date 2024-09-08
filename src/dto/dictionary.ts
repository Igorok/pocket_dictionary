
export type Word = {
    id: number;
    en: string;
    ru: string;
};

export type LessonOption = Word & {
    success: boolean;
    error: boolean;
};

export type LessonItem = {
    word: Word;
    options: LessonOption[];
    completed: boolean; // block items
    success: boolean; // show success in report
}

export type StatsItem = {
    topic: string;
    error: number;
    success: number;
}

export  type Stats = {
    [k: string]: {
        [k: string]: StatsItem;
    };
};


export type CourseItem = {
    id: number;
    t: number;
    e: number;
};

