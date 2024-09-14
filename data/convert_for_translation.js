import { writeFile } from 'node:fs/promises';
import parsed from './parsed.json' with { type: 'json' };

const convertToCsv = async () => {
    const words = parsed.map(({ word }) => word).join('\n');
    await writeFile('./for_translation.csv', words);

    console.log('Finished!');
    process.exit(0);
};

convertToCsv();