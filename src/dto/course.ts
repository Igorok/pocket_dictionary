export type Word = {
    id: string;
    word: string;
    tr_ru: string;
    topics: string[];
    updated_at?: number;
};

export type StudentWord = {
    id: string;
    errors: number;
    learned_at: number;
};

export type StudentWordDb = {
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

export type StudentCourseDb = {
    id?: string;
    title: string;
    topic: string;
    type: string;
    updated_at: number;
    course_id: string;
    student_id: string;
    words: StudentWordDb[];
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
