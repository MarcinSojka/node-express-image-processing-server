const { use } = require('chai');
const express = require('express');
const path = require('path');

const app = express();

const pathToIndex = path.resolve(__dirname, '../client/index.html');

app.use('/*');
app.route((request, respone) => {
    respone.sendFile(pathToIndex);
});

module.exports = app;