// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'example' controller
angular.module('index').controller('ExampleController', ['$scope',
	function($scope) {
		console.log("Loaded the controller");
	}
]);