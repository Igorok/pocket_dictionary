export type LessonWriteSentece = {
    id: string;
    sentence: string;
    tr_ru: string;
    hint?: string;

    error: boolean;
    success: boolean;

    userInput: string,
};

export type LessonWriteSenteceData = {
    title: string;
    sentences: LessonWriteSentece[];
    step: number;
};


export type UpdateStatsDto = {
    courseStudentId: string,
    lessonSentences: LessonWriteSentece[],
    successCount: number,
    errorCount: number,
}