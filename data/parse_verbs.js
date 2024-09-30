import readlinePromises from 'node:readline/promises';
import { writeFile } from 'node:fs/promises';

const rl = readlinePromises.createInterface({
    input: process.stdin,
});

let id = 0;
const wordsList = [];
rl.on('line', (line) => {
    const [base_form, past_simple, past_participle, tr_ru] = line.split(/\t/);
    wordsList.push({
        base_form,
        past_simple,
        past_participle,
        tr_ru,
        id,
    });
    ++id;
}).on('close', async () => {
    await writeFile('./verbs.json', JSON.stringify(wordsList));

    console.log('Finished!');
    process.exit(0);
});