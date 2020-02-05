const express = require('express');
const path = require('path');

const port = 3420;
const app = express();

app.use(express.static(path.join(__dirname, './dist')));

app.listen(port, () => console.log('listening on port 3420'));
