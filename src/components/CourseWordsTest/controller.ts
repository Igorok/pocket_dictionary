import { shuffle } from 'lodash';
import type { Course, StudentCourse, StudentWord } from '@/common/dto/course';
import type { TestWordsLesson, updateStatsDto } from './types';
import { wordsDao } from '@/common/dao/WordsLocal';
import { getCourseDao } from '@/common/dao/CourseFirebase';

const WORDS_IN_LESSON = 50;
const WORDS_IN_ITEM = 4;

const courseDao = getCourseDao(undefined);

const getLessonDataAction = async (courseId: string, language: string): Promise<TestWordsLesson> => {
    // get courses
    const studentCourse: StudentCourse = await courseDao.getStudentCourseById(
        String(courseId)
    );
    const courses: Course[] = courseDao.getCourses({
        type: 'words',
        language,
    });

    let course: Course | undefined = undefined;
    let otherTopics: String[] = [];

    courses.forEach((c: Course) => {
        if (c.id === studentCourse.course_id) {
            course = c;
        } else {
            otherTopics.push(c.topic);
        }
    });
    if (!course) {
        throw new Error('Course not found!');
    }

    // get words
    const words = wordsDao.getAllWords({ language });
    const wordsByTopic = new Map();
    const wordsForLessonById = new Map();
    const lessonWordsMap: Map<string, StudentWord> = new Map();

    words.forEach((word) => {
        if (word.topics.includes(studentCourse.topic)) {
            lessonWordsMap.set(word.id, {
                id: word.id,
                l_at: 0,
                e: 0,
            } as StudentWord);
            wordsForLessonById.set(word.id, word);
            return;
        }
        word.topics.forEach((topic) => {
            if (!wordsByTopic.has(topic)) {
                wordsByTopic.set(topic, []);
            }
            wordsByTopic.get(topic).push(word);
        });
    });

    // update stats
    studentCourse.words.forEach((word: StudentWord) => {
        lessonWordsMap.set(word.id, word);
    });
    const lessonWords = [...lessonWordsMap.values()].sort(
        (a, b) => a.l_at - b.l_at
    );

    // format data
    const lesson: TestWordsLesson = {
        courseId: studentCourse.course_id,
        studentCourseId: studentCourse.id ?? '',
        title: studentCourse.title,
        completed: false,
        words: [],
    };

    for (let i = 0; i < Math.min(WORDS_IN_LESSON, lessonWordsMap.size); ++i) {
        const current: StudentWord = lessonWords[i];
        const word = wordsForLessonById.get(current.id);
        const item = {
            word,
            success: undefined,
            options: [{
                id: word.id,
                word: word.word,
                tr_ru: word.tr_ru,
                error: false,
                success: false
            }],
        };

        // get random words for test
        for (let j = 0; j < WORDS_IN_ITEM - 1; ++j) {
            const topicId = Math.floor(Math.random() * otherTopics.length);
            const topic = otherTopics[topicId];
            const words = wordsByTopic.get(topic);
            const wordId = Math.floor(Math.random() * words.length);
            const word = words[wordId];

            item.options.push({
                id: word.id,
                word: word.word,
                tr_ru: word.tr_ru,
                error: false,
                success: false
            });
        }

        item.options = shuffle(item.options);
        lesson.words.push(item);
    }

    lesson.words = shuffle(lesson.words);

    return lesson;
};

const updateStudentCourseAction = async ({ studentCourseId, lessonWords, successCount, errorCount }: updateStatsDto) => {
    // get courses
    const studentCourse: StudentCourse = await courseDao.getStudentCourseById(
        String(studentCourseId)
    );
    if (!studentCourse) {
        throw new Error('Course not found!');
    }

    const studentStats: Map<string, StudentWord> = studentCourse.words.reduce((map, word) => {
        map.set(word.id, word);
        return map;
    }, new Map());

    for (const word of lessonWords) {
        const stats: StudentWord = studentStats.get(word.id) ?? { id: word.id, e: 0, l_at: 0 };
        stats.e += word.e;
        stats.l_at = Date.now();
        studentStats.set(word.id, stats);
    }

    await Promise.all([
        courseDao.updateStudentCourseWords(
            String(studentCourse.id),
            [...studentStats.values()],
        ),
        courseDao.updateStudentStats({
            studentId: studentCourse.student_id,
            courseId: studentCourse.course_id,
            error: errorCount,
            success: successCount,
        })
    ]);
};

export {
    getLessonDataAction,
    updateStudentCourseAction,
};
