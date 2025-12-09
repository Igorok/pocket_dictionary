import readlinePromises from 'node:readline/promises';
import { writeFile, readdir, readFile } from 'node:fs/promises';

const convert = async () => {
    const files = await readdir('./raw');
    console.log(files);

    let words = [];

    for (const file of files) {
        const content = await readFile(`./raw/${file}`, 'utf-8');
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

    await writeFile('./csv/words.csv', words.join(';\n'));
};

convert();