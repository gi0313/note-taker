const router = require('express').Router();
const content = require('../../Develop/db/db.json');
const {newNote} = require('../../lib/notes');
const {nanoid} = require('nanoid')

router.get('/notes', (req, res) => {
    res.json(content);
})

router.post('/notes', (req, res) => {
    req.body.id = nanoid();

    const note = newNote(req.body, content);
    req.json(note);
})

module.exports = router;