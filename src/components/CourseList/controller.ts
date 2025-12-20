import type { Course, StudentCourse } from '../../common/dto/course';
import type { ViewRenderData } from './types';
import { getCourseDao } from '../../common/dao/CourseFirebase';

const courseDao = getCourseDao(undefined);

export const getDataAction = async (studentId: string, language: string): Promise<ViewRenderData> => {
    const response: ViewRenderData = {
        words: [],
        sentences: [],
    };

    const allCourses: Course[] = courseDao.getCourses({ language });
    const joinedCourses: StudentCourse[] =
        await courseDao.getStudentCourses(studentId);

    const joinedMap = joinedCourses.reduce((acc, course) => {
        acc.set(course.course_id, course);
        return acc;
    }, new Map());

    allCourses.forEach((course) => {
        let joined = false;
        let student_course_id = '';
        if (joinedMap.has(course.id)) {
            joined = true;
            student_course_id = joinedMap.get(course.id).id;
        }

        if (course.type === 'words') {
            response.words.push({
                ...course,
                joined,
                student_course_id
            });
        } else {
            response.sentences.push({
                ...course,
                joined,
                student_course_id
            });
        }
    });

    return response;
};

export const joinCourseAction = async (studentId: string, courseId: string) => {
    const course: Course | undefined = courseDao.getCourseById(courseId);
    if (!course) {
        return;
    }

    const { topic, title, type } = course;
    const joined: StudentCourse = {
        course_id: courseId,
        student_id: studentId,
        title,
        topic,
        type,
        updated_at: Date.now(),
        words: []
    };

    return await courseDao.joinCourse(joined);
};
