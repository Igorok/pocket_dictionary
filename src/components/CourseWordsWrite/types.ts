import type { StudentWord } from '@/common/dto/course';

export type LessonWriteWord = {
    id: string;
    word: string;
    tr_ru: string;
    error: boolean;
    success: boolean;
};

export type RepeatItem = {
    id: string;
    word: string;
};

export type updateStatsDto = {
    courseStudentId: string;
    lessonWords: LessonWriteWord[];
    errorCount: number;
    successCount: number;
};

export type LessonWriteData = {
    title: string;
    studentId: string;
    courseId: string;
    courseStudentId: string;

    step: 0,
    countRepeat: number;
    countWords: number;

    words: LessonWriteWord[];
};
