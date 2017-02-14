// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var users = require('../../app/controllers/users.server.controller'),
	strava = require('../../app/controllers/strava.server.controller'),
	passport = require('passport');


// Define the routes module' method
module.exports = function(app) {

	// Set up the Strava OAuth routes
	app.get('/oauth/strava', passport.authenticate('strava', {
		failureRedirect: '/failureRedirect'
	}));
	app.get('/oauth/strava/callback', passport.authenticate('strava', { 
		failureRedirect: '/failureRedirect' 
	}), function(req, res) {
			console.log('/oauth/strava/callback');
			//var tempToken = req.query.code;
			//console.log('tempToken: ' + tempToken);
			//users.calculate();
	    	res.redirect('/');	
	});
  	// function(req, res) {
  	// 	console.log('access token: ' + req.param('code'));
  	// 	//console.log('req.session = ' + req.session.token);
  	// 	strava.getRecentActivities;
   //  	res.redirect('/');
  	// });

	// Set up the 'signout' route
	app.get('/logout', users.logout);

	// Set up the error redirect 
	app.get('/failureRedirect', users.failureRender);
};

