export type LessonWriteSentece = {
    id: string;
    subTopicId: string;
    subTopicTitle: string;
    sentence: string;
    tr_ru: string;
    error: boolean;
    success: boolean;

    userInput: string,
};

export type LessonWriteSenteceData = {
    title: string;
    sentences: LessonWriteSentece[];
    step: number;
};


export type updateStatsDto = {
    courseStudentId: string,
    lessonSentences: LessonWriteSentece[],
    successCount: number,
    errorCount: number,
}