import readlinePromises from 'node:readline/promises';
import { writeFile } from 'node:fs/promises';

const rl = readlinePromises.createInterface({
    input: process.stdin,
});

const wordsList = new Map();
rl.on('line', (line) => {
    const topic = line.match(/\D\d/);
    const verb = line.match(/^\w* v./);
    const par = line.match(/^\w.* \(.*\)/);
    if (par) {
        const word = par[0];
        if (word.length) {
            wordsList.set(word, { topic, word: par[0] });
        }
    } else if (verb) {
        let word = verb[0];
        word = word.replace(' v.', '');
        if (word.length) {
            word = 'to ' + word;
            wordsList.set(word, {
                topic,
                word,
            });
        }
    } else {
        const arr = line.split(' ');
        let end = 0;
        while (end < arr.length && !(arr[end].includes('.') || ['number', 'modal'].includes(arr[end]))) {
            end += 1;
        }
        let word = arr.slice(0, end);
        word = word.join(' ');
        word = word.replace(/\d/g, '');
        if (word.length) {
            wordsList.set(word, { topic, word });
        }

    }
}).on('close', async () => {
    const arr = [];
    wordsList.forEach((value) => {
        arr.push(value);
    });
    await writeFile('./parsed.json', JSON.stringify(arr));

    console.log('Finished!');
    process.exit(0);
});