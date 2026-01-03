import { writeFile } from 'node:fs/promises';
import verbs from './verbs.json' with { type: 'json' };
/*

{
    "base_form": "lose",
    "past_simple": "lost",
    "past_participle": "lost",
    "tr_ru": "терять",
    "id": 59
}

*/

const sentences = [];
const description = [];
const convert = async () => {
  let id = 240;

  for (const row of verbs) {
    const { base_form, past_simple, past_participle, tr_ru } = row;

    console.log('row', row)

    sentences.push({
      id: String(id),
      topics:['irregular_verbs'],
      sentence: [base_form, past_simple, past_participle].map((str) => {
        return (str ?? '').replace(/;/g, ',');
      }). join('; '),
      tr_ru,
      hint:"Base form; Past tense; Past participle"
    });

    description.push(
      sentences.at(-1).sentence + '; ' + tr_ru,
    )

    id += 1;
  }

  // console.log('sentences', sentences);


  await writeFile('./irregular_verbs.json', JSON.stringify(sentences), 'utf8');
  await writeFile('./irregular_description.json', JSON.stringify(description), 'utf8');
};

convert();
