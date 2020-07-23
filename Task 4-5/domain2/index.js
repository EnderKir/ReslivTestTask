const express = require('express');
const path = require('path');
const absolutePath = path.join(__dirname, 'domain2.html');
const app = express();
const port = 4000;

app.get("/", (request, response) => {
    response.sendFile(absolutePath);
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${port}`)
})