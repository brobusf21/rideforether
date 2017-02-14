// Invoke 'strict' JavaScript mode
'use strict';

var activities = require('../../app/controllers/strava.server.controller'),
	users = require('../../app/controllers/users.server.controller');

// Define the routes module' method
module.exports = function(app) {

	// Mount the 'index' controller's 'render' method
	// app.get('/', index.render);
	
	// Set up the activities API routes
	app.route('/api/activities/:userId')
	   .get(users.getLoggedActivities);


	// Set up the 'articleId' parameter middleware   
	app.param('userId', users.getAccessToken);
};