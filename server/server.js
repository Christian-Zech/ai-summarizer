require('dotenv').config();
const express = require('express');
const app = express();
const port = 5000;
const key = process.env.REACT_APP_OPENAI_API_KEY;
let link = '';

app.use(express.json());

/*
app.get('/api', (req, res) => {
    res.send({"message": 'Hello from get!'});
});
*/ 

app.post("/api", (req, res) => {
    console.log('req.body:', req.body);
    link = req.body.link;
    console.log('link:', link);
    res.send({"message": 'Hello from post!'});
});

app.listen(port, () => console.log(`Listening on port ${port}`));