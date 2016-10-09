/* Load the module dependencies */
var config = require('./config'),
	mongoose = require('mongoose');

/* Define the Mongoose configuration method */
module.exports = function() {

	/* Use Mongoose to connect to MongoDB */
	var db = mongoose.connect(config.db);

	/* If connection throws an error*/
	mongoose.connection.on('error', function(err) {
		console.log('Mongoose default connection error: ' + err);
	});

	/* When the connection gets disconnected */
	mongoose.connection.on('disconnected', function(err) {
		console.log('Mongoose default connection disconnected');
	});

	// Load the user model 
	require('../app/models/user.server.model');

	return db;
};