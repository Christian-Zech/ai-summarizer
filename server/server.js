require('dotenv').config();
const express = require('express');
const app = express();
const port = 5000;
const key = process.env.REACT_APP_OPENAI_API_KEY;
let link = '';
let summary = "";

app.use(express.json());



const openai = require('openai');
const client = new openai({apiKey: key});

async function generateSummary() {
    const stream = await client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": "Summarize the following article: " + link}],
        stream: true,
    });
    for await (const chunk of stream) {
        summary += chunk.choices[0]?.delta?.content || "";
    }
}




app.get("/api", (req, res) => {
    res.send({"summary": summary});
});

app.post("/api", (req, res) => {
    link = req.body.link;
    generateSummary();
});

app.listen(port, () => console.log(`Listening on port ${port}`));