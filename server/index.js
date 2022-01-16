// server/index.js
const path = require('path');
const express = require('express');
const OpenAI = require('openai-api');
var bodyParser = require('body-parser');


const app = express();

const PORT = process.env.PORT || 3001;

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openai = new OpenAI(OPENAI_API_KEY);

console.log("OPEN API ENV")
console.log(OPENAI_API_KEY);

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle GET requests to /api route
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

app.post("/api/dog", (req, res) => {
  const inputMsg = req.body.input;
  // console.log(inputMsg);
  (async () => {
    const gptResponse = await openai.complete({
      engine: 'davinci',
      prompt:`You: ${inputMsg}\nFriend:`,
      temperature:0.01,
      max_tokens:60,
      top_p:0.3,
      frequency_penalty:0.5,
      presence_penalty:0.0,
      stop:["\nYou:"]
    });
    res.send({outputMsg: gptResponse.data.choices[0].text});
  })()
});

app.post("/api/dawg", (req, res) => {
  const inputMsg = req.body.input;
  // console.log(inputMsg);
  (async () => {
    const gptResponse = await openai.complete({
      engine: 'davinci',
      prompt:`You: ${inputMsg}\nMarv:`,
      temperature:0.01,
      max_tokens:60,
      top_p:0.3,
      frequency_penalty:0.5,
      presence_penalty:0.0,
      stop:["\nYou"]
    });
    res.send({outputMsg: gptResponse.data.choices[0].text});
  })();
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});