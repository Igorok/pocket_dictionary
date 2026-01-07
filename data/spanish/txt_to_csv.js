import _ from 'lodash';
import readlinePromises from 'node:readline/promises';
import { writeFile, readdir, readFile } from 'node:fs/promises';

const convertToCsv = async () => {
    const rawWords = await readFile('./raw_1/1000_popular.txt', 'utf8');
    let words = [];

    for (const word of rawWords.split('\n')) {
        if (!word) {
            continue;
        }
        if (word.startsWith('topic:')) {
            continue;
        }

        const w = word.split('—')[0].split('–')[0].trim();


        words.push(w);
    }
    await writeFile('./csv/1000_popular.csv', words.join(';\n'));
};

// convertToCsv();

const convertToJSON1000 = async () => {
    let translation = await readFile('./csv/1000_translated.txt', 'utf8');
    translation = translation.split('\n');
    const rawWords = await readFile('./raw_1/1000_popular.txt', 'utf8');
    let words = [];
    let topic = '';
    let id = 764;

    for (const word of rawWords.split('\n')) {
        if (!word) {
            continue;
        }
        if (word.startsWith('topic:')) {
            topic = word.replace('topic:', '').trim();
            topic = _.snakeCase(topic);
            continue;
        }

        const w = word.split('—')[0].split('–')[0].trim();
        const i = words.length;
        words.push({
            id: String(id),
            word: w,
            topics: [topic, '1000_pop'],
            tr_ru: translation[i].trim(),
        });
        id += 1;
    }
    await writeFile('./json/1000_popular.json', JSON.stringify(words));
};

convertToJSON1000();

/*
const convert = async () => {
    const folder = 'raw_1'
    const files = await readdir(`./${folder}`);
    console.log(files);

    let words = [];

    for (const file of files) {
        const content = await readFile(`./${folder}/${file}`, 'utf-8');
        const data = content
            .split('\n')
            .map((word) =>
                word
                    .trim()
                    .replace(/;/g, ',')
                    .replace(/\\/g, ',')
                    .replace(/\./g, '')
            )
            .filter((word) => word.length);
        words = words.concat(data);
    }

    await writeFile('./csv/words_1.csv', words.join(';\n'));
};
convert();
*/
