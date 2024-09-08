import type { Word, CourseItem, StatsItem, Stats } from '../dto/dictionary';
import { shuffle } from "lodash";
import wordsList from "../data/translated";

type WordsById = {
  [k: string]: Word;
};
type CourseItemsById = {
  [k: string]: CourseItem;
};

const wordsById: WordsById = wordsList.reduce((acc: WordsById, item: Word) => {
  acc[item.id] = item;
  return acc;
}, {});


const getLessonStats = ({ topic, dt }: { topic: string, dt: string }): Stats => {
  let stats;
  let saved = localStorage.getItem("stats");
  if (saved) {
    stats = JSON.parse(saved);
  } else {
    stats = {
      [dt]: {
        [topic]: {
          success: 0,
          error: 0,
        },
      },
    };
  }

  return stats;
};

const getAllStats = (): Stats => {
  let saved = localStorage.getItem("stats");
  if (saved) {
    return JSON.parse(saved);
  }
  return {};
};

const setLessonStats = ({
  topic,
  success,
  error,
}: StatsItem) => {
  const dt = new Date().toLocaleDateString("en-US");
  const saved: Stats = getLessonStats({ topic, dt });
  saved[dt][topic].success += success;
  saved[dt][topic].error += error;
  localStorage.setItem("stats", JSON.stringify(saved));
};


/**
 * Get data about course
 *
 */
const getCourse = (topic = "all") => {
  let course;
  let saved = localStorage.getItem(`dictionary_${topic}`);

  if (saved) {
    course = JSON.parse(saved);
  } else {
    course = shuffle(wordsList).map(({ id }) => ({ id, t: 0 }));
    localStorage.setItem(`dictionary_${topic}`, JSON.stringify(course));
  }

  console.log("course", course);

  return course;
};

/**
 * Get words that was not repeated
 *
 */
const getNotRepeated = ({
  topic = "all",
  limit,
}: {
  topic: string;
  limit: number;
}) => {
  let course = getCourse(topic);
  course = course.sort((a, b) => a.t - b.t);
  const diff = course.length - limit - 1;
  if (diff > 0) {
    const start = Math.floor(Math.random() * diff);
    course = course.slice(start, start + limit);
  } else {
    course = course.slice(0, limit);
  }
  return shuffle(course).map(({ id }) => wordsById[id]);
};

/**
 * Set stats about repeated words
 *
 */
const setRepeated = ({
  topic = "all",
  ids,
}: {
  topic: string;
  ids: CourseItem[];
}) => {
  const course: CourseItem[] = getCourse(topic);
  const courseById: CourseItemsById = course.reduce((acc: CourseItemsById, item: CourseItem) => {
    acc[item.id] = item;
    return acc;
  }, {});
  ids.forEach(({ id, e, t}) => {
    courseById[id].t = t;
    courseById[id].e += e;
  });
  localStorage.setItem(
    `dictionary_${topic}`,
    JSON.stringify(Object.values(courseById)),
  );

  getCourse(topic);
};



export { getNotRepeated, setRepeated, getAllStats, setLessonStats };
