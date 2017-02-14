// Invoke 'strict' JavaScript mode
'use strict';

// Set the 'development' environment configuration object
module.exports = {
	db: 'mongodb://brob:rideforether@ds139909.mlab.com:39909/etherrides',
	sessionSecret: 'rideforethersessionsecret',
	facebook: {
		clientID: '1326166314062047',
		clientSecret: '89634dff7f0822b77d36ff8ddce41b21',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	},
	strava: {
		clientID: '15973',
		clientSecret: '5a7d4b430858d8b111e1f6a34905b8ff32ac84b1',
		callbackURL: 'http://localhost:3000/oauth/strava/callback',
		accessToken: '615f48b9b48352e69c67f7f236eb6edd2cd1a6d2'
	}
};