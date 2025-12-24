import type { Course, StudentCourse, Sentence, StudentWord } from '@/common/dto/course';
import type { LessonWriteSenteceData, UpdateStatsDto } from './types';
import { sentencesDao } from '@/common/dao/SentencesLocal';
import { getCourseDao } from '@/common/dao/CourseFirebase';

const WORDS_IN_LESSON = 3;

const courseDao = getCourseDao(undefined);

const getLessonDataAction = async (courseStudentId: string, language: string): Promise<LessonWriteSenteceData> => {
    const studentCourse: StudentCourse = await courseDao.getStudentCourseById(
        String(courseStudentId)
    );

    const course: Course | undefined = courseDao.getCourseById(
        studentCourse.course_id
    );
    if (!course) {
        throw new Error('Course not found!');
    }

    const sentences = sentencesDao.getSentences({ topic: course.topic, language });

    const allLessonSentecesMap: Map<string, StudentWord> = new Map();
    const sentencesById: Map<string, Sentence> = new Map();

    for (const sentece of sentences) {
        sentencesById.set(sentece.id, sentece);
        allLessonSentecesMap.set(sentece.id, { id: sentece.id, e: 0, l_at: 0 })
    }

    studentCourse.words.forEach((word) => {
        allLessonSentecesMap.set(word.id, word);
    });

    const allLessonSenteces = [...allLessonSentecesMap.values()].sort((a, b) => a.l_at - b.l_at);

    const lessonWriteData: LessonWriteSenteceData = {
        title: course.title,
        step: 0,
        sentences: [],
    };

    for (let i = 0; i < WORDS_IN_LESSON; ++i) {
        const studentSentence = allLessonSenteces[i];
        const sentence = sentencesById.get(studentSentence.id);
        if (!sentence) {
            continue;
        }

        lessonWriteData.sentences.push({
            id: sentence.id,
            sentence: sentence.sentence,
            tr_ru: sentence.tr_ru,
            hint: sentence?.hint ? `(${sentence.hint})` : '',

            error: false,
            success: false,

            userInput: '',
        });
    }

    return lessonWriteData;
};

const updateStudentCourseAction = async ({
    courseStudentId,
    lessonSentences,
    successCount,
    errorCount
}: UpdateStatsDto): Promise<void> => {
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

    for (const sentence of lessonSentences) {
        const stats: StudentWord = studentStats.get(sentence.id) ?? {
            id: sentence.id,
            e: 0,
            l_at: 0
        };
        stats.e += sentence.error ? 1 : 0;
        stats.l_at = Date.now();
        studentStats.set(sentence.id, stats);
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
