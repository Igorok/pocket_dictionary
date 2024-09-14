import readlinePromises from 'node:readline/promises';
import { writeFile } from 'node:fs/promises';
import parsed from './parsed.json' with { type: 'json' };

const rl = readlinePromises.createInterface({
    input: process.stdin,
});

let id = 0;
const wordsList = [];
rl.on('line', (line) => {
    const { word, topic } = parsed[id];
    wordsList.push({
        word,
        topics: [topic],
        tr_ru: line.trim(),
    });
    id += 1;
}).on('close', async () => {
    await writeFile('./merged.json', JSON.stringify(wordsList));

    console.log('Finished!');
    process.exit(0);
});