import { writeFile, readdir, readFile } from 'node:fs/promises';
import _ from 'lodash';

const convert = async () => {
    const files = await readdir('./raw');
    let id = 0

    const courses = files.map((file) => {
        const f = file.replace('.txt', '')
        const topic = _.snakeCase(f)

        return {
            id: `spn_w_${++id}`,
            title: f.replace(/_/g, ' '),
            type: 'words',
            topic: topic,
            updated_at: 0,
        };
    });

    await writeFile('./json/courses.json', JSON.stringify(courses), 'utf8');
};

convert();

