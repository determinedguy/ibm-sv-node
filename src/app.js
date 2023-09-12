const express = require('express');
const path = require('path');
const sessionMiddleware = require('./middlewares/sessionMiddleware');
const app = express();

app.use(sessionMiddleware);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../views'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Other middleware and route setup can go here

// load contents of .env into process.env
require('dotenv').config();

module.exports = app;
