// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var passport = require('passport'),
	url = require('url'),
	FacebookStrategy = require('passport-facebook').Strategy,
	StravaStrategy = require('passport-strava-oauth2').Strategy,
	config = require('../config'),
	users = require('../../app/controllers/users.server.controller'),
	strava = require('../../app/controllers/strava.server.controller');

// Create the Facebook strategy configuration method
module.exports = function() {
	passport.use(new StravaStrategy({
	 		clientID: config.strava.clientID,
	 		clientSecret: config.strava.clientSecret,
	 		callbackURL: config.strava.callbackURL,
	  	},
	  	function(accessToken, refreshToken, profile, done) {
	  		//console.log('accessToken: ' + accessToken);
	    	// Set the user's provider data and include tokens
			 var providerData = profile._json;
			 providerData.accessToken = accessToken;
			 providerData.refreshToken = refreshToken;

			//console.log('profile %j: ', profile);
			//console.log('profile.id: ' + profile.id);
	    	//console.log('profile accessToken" %j: ', profile.accessToken);
	    	//console.log('--------------------');
	    	//console.log('accessToken: ' + accessToken);
			//console.log('refreshToken: ' + refreshToken);

			// Create the user OAuth profile
			var providerUserProfile = {
				firstName: profile._json.firstname,
				lastName: profile._json.lastname,
				fullName: profile.displayName,
				email: profile._json.email,
				username: profile._json.username,
				provider: 'strava',
				providerId: profile.id,
				providerData: providerData
			};

			// Save the user OAuth profile
			users.saveOAuthUserProfile(providerUserProfile, accessToken, done);

			//console.log('***accessToken: ' + accessToken);
  		}
	));
};

