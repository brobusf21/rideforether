// Invoke 'strict' JavaScript mode
'use strict';

// Set the 'development' environment configuration object
module.exports = {
	db: 'mongodb://brandon:brobusf21@ds029715.mlab.com:29715/consumerism',
	sessionSecret: 'developmentSessionSecret',
	facebook: {
		clientID: '1326166314062047',
		clientSecret: '89634dff7f0822b77d36ff8ddce41b21',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	}
};