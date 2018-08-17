const fs = require("fs");
const _ = require("lodash")
const yargs = require("yargs");

const notes = require("./notes.js");
const titleOption={
    describe: "Title of note",
    demand : true,
    alias : "t"
}

const bodyOption ={
        describe: "body of note",
        demand : true,
        alias : "b"
}

const argv = yargs
        .command("add", "Add a New Note",{
            title : titleOption,
            body : bodyOption
        })
        .command("list", "List of all Notes")
        .command("read","Read the note",{
            title: titleOption,
        })
        .command("remove","Remove Note",{
            title : titleOption,
        })
        .help()
        .argv;
var command = argv._[0];


if(command === "add"){
    var note = notes.addNote(argv.title, argv.body)
    if(note){
        console.log("Note is added ")
        notes.logFile(note);
    }else {
        console.log("Title already exists")
    }
}else if(command === "list"){
   var allNotes =  notes.getList();
   console.log(`Printing ${allNotes.length} note(S)`);
   allNotes.forEach((note) => notes.logFile(note))
}else if(command === "read"){
   var note =  notes.getNote(argv.title);
   if(note){
    console.log("Note found")
    notes.logFile(note);
   }else{
       console.log("Note not found")
   }
}else if(command === "remove"){
    var noteRemoved = notes.removeNote(argv.title)
    var message = noteRemoved ? "Note is removed" : "Note does not exists"
    console.log(message)

}else{
    console.log("Command Not Fond")
}