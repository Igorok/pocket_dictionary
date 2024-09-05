import readlinePromises from 'node:readline/promises';
import { writeFile } from 'node:fs/promises';

const rl = readlinePromises.createInterface({
    input: process.stdin,
});

const wordsList = [];
rl.on('line', (line) => {
    const data = line.split(' ');
    const word = data[0];
    wordsList.push(word);
}).on('close', async () => {
    await writeFile('./wordsList.json', JSON.stringify(wordsList));

    console.log('Finished!');
    process.exit(0);
});