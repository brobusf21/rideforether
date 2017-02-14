// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'example' controller
angular.module('dashboard').controller('DashboardController', ['$scope', 'Activities', 'Authentication',
	function($scope, Activities, Authentication) {
		console.log("Loaded the dashboard controller");
		
		$scope.authentication = Authentication;

		// Create a new controller method for retrieving a list of articles
        // $scope.find = function() {

        // 	if (!window.user._id == null) {
        // 	// Use the article 'query' method to send an appropriate GET request
        //     	$scope.recentActivities = Activities.query();
        //     }
       // };
	}
]);