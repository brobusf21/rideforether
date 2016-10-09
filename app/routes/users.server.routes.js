// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var users = require('../../app/controllers/users.server.controller'),
	passport = require('passport');


// Define the routes module' method
module.exports = function(app) {
	// Set up the Facebook OAuth routes 
	app.get('/oauth/facebook', 
		passport.authenticate('facebook'));

	app.get('/oauth/facebook/callback', 
		passport.authenticate('facebook', {
		failureRedirect: '/signin' }),
		function(req, res) {
			res.redirect('/');
		});
};