const router = require('express').Router();
const content = require('../../Develop/db/db.json');
const {newNote} = require('../../lib/notes');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
    res.json(content);
})

router.post('/notes', (req, res) => {
    req.body.id = nanoid();

    const note = newNote(req.body, content);
    req.json(note);
})

router.delete('/notes/:id', (req, res) => {
    deleteNote('./db/db.json', 'req.params.id');
    res.send(req.body);
})

module.exports = router;