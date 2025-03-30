export type Student = {
    id: string;
    email: string;
};

export type CourseStats = {
    id: string,
    e: number;
    s: number;
};

export type StudentDailyStats = {
    day: string,
    stats: CourseStats[],
};

export type StudentStats = {
    student_id: string;
    days: StudentDailyStats[],
};

export type ProgressItem = {
    courseId: string;
    title: string;
    error: number;
    success: number;
    total: number;
};

export type StudentProgressData = {
    date: string;
    error: number;
    success: number;
    total: number;
    progress: ProgressItem[];
};
