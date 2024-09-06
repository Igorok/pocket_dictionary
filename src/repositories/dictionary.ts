import { shuffle } from "lodash";
import wordsList from "../data/translated";

const wordsById = wordsList.reduce((acc: object, item: object) => {
  acc[item.id] = item;
  return acc;
}, {});

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
  ids: number[];
}) => {
  const course = getCourse(topic);
  const courseById = course.reduce((acc: object, item: object) => {
    acc[item.id] = item;
    return acc;
  }, {});
  ids.forEach((id) => {
    courseById[id].t = Date.now();
  });
  localStorage.setItem(
    `dictionary_${topic}`,
    JSON.stringify(Object.values(courseById)),
  );

  getCourse(topic);
};

const setLessonStats = ({
  topic,
  success,
  error,
}: {
  topic: string;
  success: number;
  error: number;
}) => {
  const dt = new Date().toLocaleDateString("en-US");
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
  stats[dt][topic].success += success;
  stats[dt][topic].error += error;
  localStorage.setItem("stats", JSON.stringify(stats));
};

export { getNotRepeated, setRepeated, setLessonStats };
