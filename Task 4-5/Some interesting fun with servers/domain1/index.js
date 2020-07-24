const express = require('express');
const path = require('path');
const cors = require("cors");
const absolutePath = path.join(__dirname, 'domain1.html');
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (request, response) => {
    response.sendFile(absolutePath);
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${port}`)
})