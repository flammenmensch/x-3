(function (ng) {
	ng.module('xq', [ 'ngRoute' ])
		/*.config([ '$locationProvider', function ($locationProvider) {
			$locationProvider
				.html5Mode(true)
		} ])*/
		.config([ '$routeProvider', function ($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: './views/home.html'
				})
				.when('/register', {
					templateUrl: './views/register.html'
				})
				.otherwise({
					redirectTo: '/'
				});
		} ]);
} (angular));
