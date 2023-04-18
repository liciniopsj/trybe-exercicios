// src/app.js
const express = require('express');

const OK = 200;

const app = express();

app.get('/', (req, res) => res.status(OK).json({ message: 'Hello, World!' }));

module.exports = app;