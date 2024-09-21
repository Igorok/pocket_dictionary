export type Student = {
    id: string;
    email: string;
};

type StatsItem = {
    date: string;
    course_id: string;
    success: number;
    errors: number;
};

export type StudentStats = {
    student_id: string;
    by_days: string;
};
