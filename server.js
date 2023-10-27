const express = require('express');
const path = require('path');
const fs = require ('fs');
const { v4: uuid } = require('uuid');
const {readFromFile, writeToFile, readAndAppend } = require('./helpers/fsUtils');
const PORT = 3001;
const app = express();

//parse json and url encoded requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// Get HTML route for / 
app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);


// api requests
app.get("/api/notes", (req, res) => {
  readFromFile("./db/db.json")
    .then((data => res.json(JSON.parse(data))));
});

//  if get matches nothing.. return them to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

//POST
app.post('/api/notes', (req, res) => {
    const { title, text } = req.body;
    if(title && text) {
        const newNote = { 
            title,
            text,
            id: uuid(),
        }
        readAndAppend(newNote, './db/db.json');
        // console.log(res);
        res.status(201).json(newNote);        
    } else {
        res.status(500).json('Error in posting Note');
    }
});

//DELETE
app.delete("/api/notes/:id", (req, res) => {
  //get all the notes from file
  //filter notes that dont match the params id
  //write that back to file.

  const idToDelete = req.params.id;
  if (!!idToDelete) {
    readFromFile("./db/db.json").then((data) => {
        let newNotes = JSON.parse(data);
        newNotes = newNotes.filter((note) => note.id !== idToDelete);
        writeToFile("./db/db.json", newNotes);
      });
      res.status(200).json(`Note with id: ${idToDelete} deleted`);
  } else {
    res.status(500).json('Error in deleting Note');
  }

});

app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)
);