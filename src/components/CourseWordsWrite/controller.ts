import type { LessonWriteData, LessonWriteWord, updateStatsDto } from './types';
import type { Course, StudentCourse, StudentWord, Word } from '@/common/dto/course';
import { wordsDao } from '@/common/dao/WordsLocal';
import { getCourseDao } from '@/common/dao/CourseFirebase';

const courseDao = getCourseDao();

const WORDS_COUNT: number = 5;
const REPEAT_COUNT: number = 3;

const getLessonDataAction = async (
    courseId: string,
    language: string
): Promise<LessonWriteData> => {
    const studentCourse = await courseDao.getStudentCourseById(courseId);
    const course: Course | undefined = courseDao.getCourseById(
        studentCourse.course_id
    );
    if (!course) {
        throw new Error('Course not found!');
    }

    const words = wordsDao.getAllWords({
        topic: course.topic,
        language: language
    });

    const lessonWordsMap: Map<string, StudentWord> = new Map();
    for (const word of studentCourse.words) {
        lessonWordsMap.set(word.id, word);
    }

    const wordsById: Map<string, Word> = new Map();

    for (const word of words) {
        wordsById.set(word.id, word);
        if (!lessonWordsMap.has(word.id)) {
            lessonWordsMap.set(word.id, { id: word.id, l_at: 0, e: 0 });
        }
    }

    const lessonWriteWords: LessonWriteWord[] = [];
    const lessonWords: StudentWord[] = [...lessonWordsMap.values()].sort(
        (a, b) => a.l_at - b.l_at
    );

    const lessonData: LessonWriteData = {
        title: course.title,
        studentId: studentCourse.student_id,
        courseId: studentCourse.course_id,
        courseStudentId: studentCourse.id ?? '',

        step: 0,
        countRepeat: REPEAT_COUNT,
        countWords: WORDS_COUNT,

        words: []
    };

    for (let i = 0; i < WORDS_COUNT; ++i) {
        const { id } = lessonWords[i];
        const word = wordsById.get(id);
        if (!word) continue;

        lessonData.words.push({
            id: word.id,
            word: word.word,
            tr_ru: word.tr_ru,
            error: false,
            success: false
        });
    }

    return lessonData;
};

const updateStudentCourseAction = async ({
    courseStudentId,
    lessonWords,
    successCount,
    errorCount
}: updateStatsDto) => {
    // get courses
    const studentCourse: StudentCourse =
        await courseDao.getStudentCourseById(courseStudentId);
    if (!studentCourse) {
        throw new Error('Course not found!');
    }

    const studentStats: Map<string, StudentWord> = studentCourse.words.reduce(
        (map, word) => {
            map.set(word.id, word);
            return map;
        },
        new Map()
    );

    for (const word of lessonWords) {
        const stats: StudentWord = studentStats.get(word.id) ?? {
            id: word.id,
            e: 0,
            l_at: 0
        };
        stats.e += word.error ? 1 : 0;
        stats.l_at = Date.now();
        studentStats.set(word.id, stats);
    }

    await Promise.all([
        courseDao.updateStudentCourseWords(String(studentCourse.id), [
            ...studentStats.values()
        ]),
        courseDao.updateStudentStats({
            studentId: studentCourse.student_id,
            courseId: studentCourse.course_id,
            error: errorCount,
            success: successCount
        })
    ]);
};

export { getLessonDataAction, updateStudentCourseAction };
