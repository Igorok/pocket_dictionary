<h3>Where I can get list of words?</h3>

[Oxford 3000 and 5000](https://www.oxfordlearnersdictionaries.com/wordlists/)
The most important words to learn in English.

<h3>How can I use these?</h3>

```

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

```

<h3>How can I translate these?</h3>

I can translate all words by [google](https://translate.google.com/?sl=en&tl=ru&op=docs)

```

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

```



https://ui.vuestic.dev/getting-started/installation

