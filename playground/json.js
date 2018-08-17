// var obj= {
//     name:"Nick"
// }
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Nick", "age" : 25}' ;
// var personObj = JSON.parse(personString);
// console.log(typeof personObj);
// console.log(personObj)

const fs = require("fs");

var originalNote = {
    title : "Some title",
    body : "some body"
}

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync("notes.json", originalNoteString);

var noteString = fs.readFileSync("notes.json");
var notes = JSON.parse(noteString);

console.log(typeof notes)
console.log(notes.title)