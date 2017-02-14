// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'example' controller
angular.module('index').controller('IndexController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// Expose the authentication service
		$scope.authentication = Authentication;
	}
]);