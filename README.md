# Note Taker
![License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)  


## Description 
[Note Taker deployed link](https://protected-plains-20171-d8e80bc65b06.herokuapp.com/)

The task for this project was to modify starter code to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

The application’s front end has already been created. My job was to build the back end, connect the two, and then deploy the entire application to Heroku.


## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |-------------| 
| JavaScript    | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | 
| node.js    | [https://nodejs.org/en](https://nodejs.org/en) | 
| Express.js    | [https://expressjs.com/](https://expressjs.com/) | 
| Git | [https://git-scm.com/](https://git-scm.com/)     |   


## Installation 

Needs node.js and npm installed.

Clone the repo.

Navigate to the directory containing server.js  

Install dependencies by this command:
<pre>
npm install
</pre>

Start server
<pre>
node server.js
</pre>

Access the application in a browser by going to http://localhost:3001 

## Usage
On the homepage click "Get Started". 

This takes the user to notes page.

User can type in a Note Title and Note text which then enables the "Save Note" and "Clear Form" buttons to save and clear the current note.

User can see all the existing notes on the notes page.

User can delete a note by clicking on the trash can icon next to an existing note.



## API Endpoints

The Express Note Taker application exposes the following API endpoints:

- `GET /api/notes` - Get all saved notes.
- `POST /api/notes` - Create a new note.
- `DELETE /api/notes/:id` - Delete a note by its unique ID.

The Express Note Taker application exposes the following HTML endpoints:

- `GET /` - public/index.html.
- `GET /notes` - public/notes.html.
- `GET *` - public/index.html.



## Mock-Up

The following GIF shows the web application's appearance and functionality:

![Note-take working gif](./images/11-express-homework-demo.gif)


## Author Info

Deepak Sinha
* [Portfolio](https://dee-here.github.io/portfolio/)
* [Github](https://github.com/dee-here)
* [Questions ](mailto:deepakdilse@gmail.com)

## License
![License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)  

[License Link](https://choosealicense.com/licenses/mit/)  

