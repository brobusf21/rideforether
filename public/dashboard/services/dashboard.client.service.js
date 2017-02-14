// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'articles' service
angular.module('dashboard').factory('Activities', ['$resource', 'Authentication', function($resource, Authentication) {

	var auth = Authentication;
	if (auth.user._id == null) {
		return;
	} else {
	// Use the '$resource' service to return an article '$resource' object
    	return $resource('api/activities/:userId', {
    		userId: auth.user._id
    	});
    }
}]);