'use strict';

const superagent = require('superagent');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
const API_URL = ''

// Set the view engine for templating
app.set('view engine', 'ejs');

// Routes
app.get('/', homePage);
app.get('/category/:cat', listingsPage);

function homePage(request, response) {
}

function listingsPage(request, response) {
}

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
