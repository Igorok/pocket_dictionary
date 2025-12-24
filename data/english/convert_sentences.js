import { writeFile } from 'node:fs/promises';
import sentences from './sentences.json' with { type: 'json' };

const description = [
        {
            "id": "1",
            "topic": "present",
            "title": "Present Simple",
            "description": [
                "Used for habitual actions or general truths: She reads every morning.",
                "Signal words: every day, sometimes, always, often, usually, seldom, never, first ... then",
                "I work. I don't work. Do I work?",
                "He works. He doesn't work. Does he work?",
                "I go. I don't go. Do I go?",
                "He goes. He doesn't go. Does he go?"
            ]
        },
        {
            "id": "2",
            "topic": "present",
            "title": "Present Continuous",
            "description": [
                "Describes actions happening now or around the current time: She is reading right now.",
                "Signal words: now, at the moment, Look!, Listen!",
                "I'm working. I'm not working. Am I working?",
                "He's working. He isn't working. Is he working?",
                "I'm going. I'm not going. Am I going?",
                "He's going. He isn't going. Is he going?"
            ]
        },
        {
            "id": "3",
            "topic": "present",
            "title": "Present Perfect",
            "description": [
                "Indicates an action that occurred at an unspecified time before now: She has read five books this month.",
                "Signal words: just, yet, never, ever, already, so far, up to now, since, for, recently",
                "I have worked. I haven't worked. Have I worked?",
                "He has worked. He hasn't worked. Has he worked?",
                "I have gone. I haven't gone. Have I gone?",
                "He has gone. He hasn't gone. Has he gone?"
            ]
        },
        {
            "id": "4",
            "topic": "present",
            "title": "Present Perfect Continuous",
            "description": [
                "Emphasizes the duration of an ongoing action that started in the past: She has been reading for two hours.",
                "Signal words: all day, the whole day, how long, since, for",
                "I have been working. I haven't been working. Have I been working?",
                "He has been working. He hasn't been working. Has he been working?",
                "I have been going. I haven't been going. Have I been going?",
                "He has been going. He hasn't been going. Has he been going?"
            ]
        },
        {
            "id": "5",
            "topic": "past",
            "title": "Past Simple",
            "description": [
                "Describes completed actions at a specific time in the past: She read the book yesterday.",
                "Signal words: last ..., ... ago, in 1990, yesterday",
                "I worked. I didn't work. Did I work?",
                "He worked. He didn't work. Did he work?",
                "I went. I didn't go. Did I go?",
                "He went. He didn't go. Did he go?"
            ]
        },
        {
            "id": "6",
            "topic": "past",
            "title": "Past Continuous",
            "description": [
                "Focuses on actions that were in progress at a specific time in the past: She was reading when I called her.",
                "Signal words: while",
                "I was working. I wasn't working. Was I working?",
                "He was working. He wasn't working. Was he working?",
                "I was going. I wasn't going. Was I going?",
                "He was going. He wasn't going. Was he going?"
            ]
        },
        {
            "id": "7",
            "topic": "past",
            "title": "Past Perfect",
            "description": [
                "Indicates an action completed before another past action: She had read the book before the meeting.",
                "Signal words: already, just, never",
                "I had worked. I hadn't worked. Had I worked?",
                "He had worked. He hadn't worked. Had he worked?",
                "I had gone. I hadn't gone. Had I gone?",
                "He had gone. He hadn't gone. Had he gone?"
            ]
        },
        {
            "id": "8",
            "topic": "past",
            "title": "Past Perfect Continuous",
            "description": [
                "Emphasizes the duration of an action that was ongoing before another past action: She had been reading for an hour when he arrived.",
                "Signal words: how long, since, for",
                "I had been working. I hadn't been working. Had I been working?",
                "He had been working. He hadn't been working. Had he been working?",
                "I had been going. I hadn't been going. Had I been going?",
                "He had been going. He hadn't been going. Had he been going?"
            ]
        },
        {
            "id": "9",
            "topic": "future",
            "title": "Future Simple",
        },
        {
            "id": "10",
            "topic": "future",
            "title": "Future Continuous",
        },
        {
            "id": "11",
            "topic": "future",
            "title": "Future Perfect",
        },
        {
            "id": "12",
            "topic": "future",
            "title": "Future Perfect Continuous",
        }
    ];


const topicsById = description.reduce((map, { id, topic, title }) => {
    const topics = [topic, title.toLowerCase().replaceAll(' ', '_')];
    map.set(id, { topics, title });
    return map;
}, new Map());


console.log(
    'topicsById', topicsById,
);

const convert = async () => {
    const converted = sentences.map((item) => {
        const { id, topic_id, sentence, tr_ru } = item;
        const { topics, title } = topicsById.get(topic_id);
        return {
            id,
            topics,
            sentence,
            tr_ru,
            hint: title,
        };
    });

    await writeFile('./converted_sentences.json', JSON.stringify(converted), 'utf8');

    console.log('Finished!');
    process.exit(0);
};

convert();
