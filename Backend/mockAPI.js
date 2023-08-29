const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(cors());

app.post('/ask', (req, res) => {

    const response = "Hello from GenAI!";

    res.json({ response });
});

app.listen(port, () => {
    console.log(`Mock API listening at http://localhost:${port}`);
});
