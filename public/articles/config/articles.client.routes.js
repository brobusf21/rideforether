// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'articles' module routes
angular.module('articles').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/articles/create', {
			templateUrl: 'articles/views/create-article.client.view.html'
		})
	}
]); 