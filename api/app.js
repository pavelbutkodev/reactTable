const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const tableRoutes = require('./routes/table');
const keys = require('./config/keys');

const app = express();

mongoose.connect(keys.mongoDB, {useNewUrlParser: true})
	.then(() => console.log('MongoDB connected.'))
	.catch((error) => {
		console.log(error);
	})

app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())

app.use('/table', tableRoutes)

module.exports = app;