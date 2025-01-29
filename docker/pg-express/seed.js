import Note from './model/notes.js';
import sequelize from './db/index.js';

import { faker } from '@faker-js/faker';

await sequelize.authenticate();

const notes = new Array(15).fill('').map((el) => ({
    content: faker.word.words(10),
}));

await Note.bulkCreate(notes);

await sequelize.close();
