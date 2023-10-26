const express = require('express');
const path = require('path');
const fs = require ('fs');

const {readFromFile, writeToFile, readAndAppend } = require('./helpers/fsUtils');

const { v4: uuid } = require('uuid');
// console.log('uuid is: ', uuid());

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
  console.info(`${req} request for notes`);
  readFromFile("./db/db.json")
    .then((data => res.json(JSON.parse(data))));
});

//POST
app.post('/api/notes', (req, res) => {
    console.log(`${req.method} request received to add a NOTE`);
    const { title, text } = req.body;
    console.log("test ", title, text);
    if(title && text) {
        const newNote = { 
            title,
            text,
            note_id: uuid(),
        }

        readAndAppend(newNote, './db/db.json');


        console.log("newNote ", newNote);
        console.log(response);
        res.status(201).json(response);        
    } else {
        res.status(500).json('Error in posting Note');
    }
});

app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)
);