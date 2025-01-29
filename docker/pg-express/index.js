import express from 'express';
import Note from './model/notes.js';

const app = express();
const port = 8080;

app.use(express.json());

app.route('/notes')
    .get(async (req, res) => {
        const notes = await Note.findAll();
        res.json({ data: notes });
    })
    .post(async (req, res) => {
        const newNote = await Note.create(req.body);
        res.json({ data: newNote });
    });

app.listen(
    port,
    console.log(`server is listening on http://localhost:${port}`)
);
