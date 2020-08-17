const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Bye there2');
});

app.listen(8080, () => {
    console.log('listening on port 8080');
});