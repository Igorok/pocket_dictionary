export type Course = {
    id: string | undefined;
    title: string;
    topic: string;
    type: string;
    updated_at: number;
};

type StudentFields = {
    course_id: string;
    student_id: string;
};

export type StudentCourse = Course & StudentFields;
