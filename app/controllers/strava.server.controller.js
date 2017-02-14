// Invoke 'strict' JavaScript mode
'use strict';

var request = require('request'),
	users = require('./users.server.controller');

// Create a new controller method that creates new 'OAuth' users
exports.trackActivities = function(profile, accessToken) {
	console.log('strava.server.controller.js: trackActivites');
	console.log('profile.providerId: ' + profile.providerId + ' accessToken:' + accessToken);

	var options = {
		url: 'https://www.strava.com/api/v3/athlete/activities',
  		headers: {
    		'Authorization': 'Bearer ' + accessToken
  		}
	};
	function callback(error, response, body) {
  		if (!error && response.statusCode == 200) {
    		var stravaActivities = JSON.parse(body); // Have the activites
    		users.updateTrackedActivityList(profile, stravaActivities);
    		return;
  		} else {
  			console.log(error);
  		}
	}
	request(options, callback);
	return;
};