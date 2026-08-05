# MicroNotes

This is my first MERN stack project. In this project, I created a simple notes application where users can add notes and see all the saved notes.

## Features

- Add a new note
- View all notes
- React frontend
- Express backend
- Data is stored in memory while the server is running

## Technologies Used

- React
- Vite
- Node.js
- Express.js
- JavaScript

## How to Run

### Backend

```bash
cd server
npm install
node server.js
```

### Frontend

Open another terminal and run:

```bash
cd client
npm install
npm run dev
```

Then open:

```
http://localhost:5173
```

## API Used

### GET /api/notes

Returns all notes.

### POST /api/notes

Adds a new note.

## Project Structure

```
MERN ASSIGNMENT
│
├── client
├── server
├── warmup.js
├── README.md
└── .gitignore
```

## What I Learned

While making this project, I learned:
- How React communicates with an Express backend.
- How to use `fetch()` with `async/await`.
- How GET and POST APIs work.
- Basic project structure of a MERN application.

