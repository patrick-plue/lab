import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';

const Note = sequelize.define('Note', {
    content: {
        type: DataTypes.STRING,
    },
});

Note.sync();

export default Note;
