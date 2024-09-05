import readlinePromises from 'node:readline/promises';
import { writeFile } from 'node:fs/promises';

const rl = readlinePromises.createInterface({
    input: process.stdin,
});

let id = 0;
const wordsList = [];
rl.on('line', (line) => {
    const data = line.split(',');
    const en = data[0].trim();
    const ru = data[1].trim();
    wordsList.push({
        id,
        ru,
        en,
    });
    id += 1;
}).on('close', async () => {
    await writeFile('./translated.json', JSON.stringify(wordsList));

    console.log('Finished!');
    process.exit(0);
});