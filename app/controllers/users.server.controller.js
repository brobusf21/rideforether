// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var passport = require('passport'),
	User = require('mongoose').model('User'),
	request = require('request'),
	moment = require('moment'),
	config = require('../../config/config'),
	strava = require('./strava.server.controller');



exports.updateTrackedActivityList = function(profile, stravaActivities) {
	console.log('users.server.controller.js: updateTrackedActivityList');
	User.findOne({providerId: profile.providerId}, function(err, user) {
		if (err) {
			console.log(err);
		} else {
			//console.log('user: ' + user);
			var i = 0;
			while (moment(stravaActivities[i].start_date) > moment(user.created)) {
				if (!loggedActivities.includes(stravaActivities[i])) {
					// Need to calculate ether and save that as well
					user.loggedActivities.push(stravaActivities[i]);
				}
				i++;
			}
			user.save(function(err) {
				// Continue to the next middleware
				return;
			});
		}
	});
};


exports.getLoggedActivities = function() {
	console.log('getLoggedActivities');
};

exports.getAccessToken = function(req, res, next, id) {
	console.log('getAccessToken: ' + id);
};

// Create a new controller method that creates new 'OAuth' users
exports.saveOAuthUserProfile = function(profile, accessToken, done) {
	console.log('users.server.controller.js: saveOAuthUserProfile');
	// Try finding a user document that was registered using the current OAuth provider
	User.findOne({
		provider: profile.provider,
		providerId: profile.providerId
	}, function(err, user) {
		// If an error occurs continue to the next middleware
		if (err) {
			return done(err);
		} else {
			// If a user could not be found, create a new user, otherwise, continue to the next middleware
			if (!user) {
				console.log('New user!');
				// Set a possible base username
				var possibleUsername = profile.username || ((profile.email) ? profile.email.split('@')[0] : '');

				// Find a unique available username
				User.findUniqueUsername(possibleUsername, null, function(availableUsername) {
					// Set the available user name 
					profile.username = availableUsername;

					// Create the user
					user = new User(profile);

					// Try saving the new user document
					user.save(function(err) {
						// Continue to the next middleware
						return done(err, user);
					});
					// var promise = user.save();
					// promise.then(function(err) {
					// 	// Continue to the next middleware
					// 	console.log('err: ' + err);
					// 	return done(err, user);
					// });
					//console.log('No save');
					//return done(err, user);
				});
			} else {
				// User has already signed up and has been here before
				// Continue to the next middleware
				console.log('User already added! Generate ether!');

				strava.trackActivities(profile, accessToken);

				return done(err, user);
			}
		}
	});
};

// Create a new controller method for signing out
exports.logout = function(req, res) {
	// Use the Passport 'logout' method to logout
	req.logout();
	req.session.destroy(function (err) {
		console.log('Error logout(): ' + err);
	});

	// Redirect the user back to the main application page
	res.redirect('/');
};


// Render the error_message page 
exports.failureRender = function(req, res) {
	console.log('failureRedirect!');
	//res.redirect('/failureRedirect');
	res.render('error_message');
}; 