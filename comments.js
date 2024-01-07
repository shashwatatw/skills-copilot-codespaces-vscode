//create a web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// parse application/json
app.use(bodyParser.json());
app.use(cors());

//create a route
app.get('/', (req, res) => {
    res.send('Hello World');
});

//create a route
app.get('/api/comments', (req, res) => {
    res.send(['comment1', 'comment2', 'comment3']);
});

//create a route
app.post('/api/comments', (req, res) => {
    console.log(req.body);
    res.send('Post received');
});

//create a route
app.get('/api/comments/:id', (req, res) => {
    res.send(req.params.id);
});

//create a route
app.put('/api/comments/:id', (req, res) => {
    res.send(req.body);
});

//create a route
app.delete('/api/comments/:id', (req, res) => {
    res.send(req.params.id);
});

//PORT
const port = process.env.PORT || 3000;

//listen on port
app.listen(port, () => console.log(`Listening on port ${port}`));