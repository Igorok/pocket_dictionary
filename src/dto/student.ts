export type Student = {
    id: string;
    email: string;
};

export type StudentStats = {
    student_id: string;
    byDay: {
        [k: string]: {
            [k: string]: {
                e: number;
                s: number;
            };
        };
    };
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
