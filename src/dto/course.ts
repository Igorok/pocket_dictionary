export type Course = {
    id?: string;
    title: string;
    topic: string;
    type: string;
    updated_at: number;
};

type StudentCourseFields = {
    course_id: string;
    student_id: string;
};

export type StudentCourse = Course & StudentCourseFields;

export type Word = {
    id?: string,
    word: string,
    tr_ru: string,
    topics: string[],
    updated_at: number;
}

export type StudentWord = {
    id?: string,
    student_course_id: string,
    word: string,
    tr_ru: string,
    errors: number,
    learned_at: number,
};
