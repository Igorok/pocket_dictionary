import { writeFile } from 'node:fs/promises';
import readlinePromises from 'node:readline/promises';
import data from './sentenses.json' with {type: 'json'};

const writeCsv = async () => {
    const sentenceArr = data.map(({ sentence }) => sentence);
    await writeFile('./sentenses.csv', sentenceArr.join('\n'));
};

const writeJson = async () => {
    const rl = readlinePromises.createInterface({
        input: process.stdin,
    });

    let id = 0;
    const sentensesList = [];
    rl.on('line', (line) => {
        const [sentense, tr_ru] = line.split(';');
        const item = data[id];
        sentensesList.push({
            ...item,
            id: id.toString(),
            tr_ru: tr_ru.trim(),
        });
        ++id;
    }).on('close', async () => {
        await writeFile('./sentenses_tr.json', JSON.stringify(sentensesList));

        console.log('Finished!');
        process.exit(0);
    });
};

writeJson();