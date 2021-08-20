const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('This file is currently used for jenkins ci/cd');
});

app.listen('8081', () => {
    console.log('listening on port 8081');
});