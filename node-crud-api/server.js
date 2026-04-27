const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let users = []; // temporary storage

// CREATE
app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.send("User added successfully");
});

// READ
app.get('/users', (req, res) => {
    res.json(users);
});

// UPDATE
app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    users[id] = req.body;
    res.send("User updated");
});

// DELETE
app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    users.splice(id, 1);
    res.send("User deleted");
});

// START SERVER
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
app.get('/', (req, res) => {
  res.send('Welcome to Node CRUD API 🚀');
});
app.use(express.static('public'));