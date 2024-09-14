import readlinePromises from 'node:readline/promises';
import { writeFile } from 'node:fs/promises';

const rl = readlinePromises.createInterface({
    input: process.stdin,
});

const wordsList = [];
rl.on('line', (line) => {
    const data = line.split(' ');
    const word = data[0];
    const topic = data[data.length - 1];
    wordsList.push({
        word,
        topic,
    });
}).on('close', async () => {
    const sorted = wordsList
    .sort((a, b) => a.word < b.word ? -1 : 1)
    .reduce((acc, { word, topic }) => {
        if (acc.length > 0 && acc[acc.length - 1].word === word) {
            return acc;
        } else {
            acc.push({ word, topic });
        }
        return acc;
    }, []);
    await writeFile('./parsed.json', JSON.stringify(sorted));

    console.log('Finished!');
    process.exit(0);
});