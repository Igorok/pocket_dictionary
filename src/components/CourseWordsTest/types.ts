import type { Word, StudentWord } from '@/common/dto/course.ts';

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
    success: boolean|undefined;
};

export type TestWordsLesson = {
    courseId: string,
    studentCourseId: string,
    title: string;
    words: TestWordsItem[];
    completed: boolean;
};

export type updateStatsDto = {
    studentCourseId: string,
    lessonWords: StudentWord[],
    errorCount: number,
    successCount: number,
};
