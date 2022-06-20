const fs = require('fs');
const path = require('path');

function newNote(body, content) {
  const note = body;
  
// add note
  content.push(note);

  fs.writeFileSync(
    path.join(__dirname, '../Develop/db/db.json'),
    JSON.stringify( content , null, 2)
  );
  return note;
}

module.exports = {newNote}