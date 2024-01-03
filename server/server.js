require('dotenv').config();
const express = require('express');
const app = express();
const port = 5000;
const key = process.env.REACT_APP_OPENAI_API_KEY;

app.get('/api', (req, res) => {
    res.json({ message: key});
})

app.listen(port, () => console.log(`Listening on port ${port}`));