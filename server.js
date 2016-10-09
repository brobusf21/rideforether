// Invoke 'strict' JavaScript mode
'use strict';

// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

/* Load dependencies */
var express = require('./config/express'),
	mongoose = require('./config/mongoose'),
	passport = require('./config/passport');

// Create a new Mongoose connection instance
var db = mongoose();

// Create a new Express application instance
var app = express(db);

// Configure the Passport middleware
var passport = passport();

/* Use the Express application instance to listen on localhost */
app.listen(3000);

console.log('Server running at http://localhost:3000/');

/* Expose this application */
module.exports = app;