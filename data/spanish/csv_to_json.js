import { writeFile, readdir, readFile } from 'node:fs/promises';
import _ from 'lodash';

const convert = async () => {
    let words = await readFile('./csv/words.csv', 'utf8');
    words = words
        .split('\n')
        .map((word) => word.replace(/;/g, ''));

    let translated = await readFile('./csv/words_translated.txt', 'utf8');
    translated = translated
        .split('\n')
        .map((word) => word.replace(/;/g, ''));

    const merged = {};

    for (let i = 0; i < words.length; i++) {
        const id = i;
        const word = words[i];
        const tr = translated[i];
        const key = _.snakeCase(word);

        merged[key] = {
            id: i,
            word,
            topics: [],
            tr_ru: tr,
        };
    }


    const files = await readdir('./raw');
    console.log(files);

    for (const file of files) {
        const content = await readFile(`./raw/${file}`, 'utf-8');
        const data = content
            .split('\n')
            .forEach((word) => {
                const w = word
                    .trim()
                    .replace(/;/g, ',')
                    .replace(/\\/g, ',')
                    .replace(/\./g, '');
                if (!w) return;
                const key = _.snakeCase(w);
                merged[key].topics.push(_.snakeCase(file.replace('.txt', '')));
            });

        words = words.concat(data);
    }

    await writeFile('./merged.json', JSON.stringify(Object.values(merged)), 'utf8');
};

convert();