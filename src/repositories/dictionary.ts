import { shuffle } from 'lodash';
import wordsList from "../data/translated";

const wordsById = wordsList.reduce((acc: object, item: object) => {
    acc[item.id] = item;
    return acc;
}, {});

const getCourse = (topic = 'all') => {
    let course;
    let saved = localStorage.getItem(`dictionary_${topic}`);

    if (saved) {
        course = JSON.parse(saved);
    } else {
        course = wordsList.map(({ id }) => ({ id, t: 0}));
        localStorage.setItem(`dictionary_${topic}`, JSON.stringify(course));
    }

    console.log('course', course);

    return course;
};

const getNotRepeated = ({ topic = 'all', limit }: {topic: string, limit: number}) => {
    let course = getCourse(topic);
    course = course.sort((a, b) => a.t - b.t);

    if (course.length > limit * 2) {
        course = course.slice(0, course.length - limit);
    } else {
        course = course.slice(0, limit);
    }
    course = shuffle(course);
    course = course.slice(0, limit);

    return course.map(({ id }) => wordsById[id]);
};

const setRepeated = ({ topic = 'all', ids }: { topic: string, ids: number[] }) => {
    const course = getCourse(topic);
    const courseById = course.reduce((acc: object, item: object) => {
        acc[item.id] = item;
        return acc;
    }, {});
    ids.forEach((id) => {
        courseById[id].t = Date.now();
    });
    localStorage.setItem(`dictionary_${topic}`, JSON.stringify(Object.values(courseById)));

    getCourse(topic);
};

export {
    getNotRepeated,
    setRepeated,
}