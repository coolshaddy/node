const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hi one moe time there');
});

app.listen('8081', () => {
    console.log('listening on port 8081');
});