
import type { Course } from '../../common/dto/course';

type Joined = {
    joined: boolean;
    student_course_id: string;
};
export type CourseItem = Course & Joined;

export type ViewRenderData = {
    words: CourseItem[],
    sentences: CourseItem[],
};