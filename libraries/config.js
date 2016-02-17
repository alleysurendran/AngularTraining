myApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider

	.when('/vacation', {
		templateUrl : '/views/vacation.html',
		controller : 'VacationController'
	})
	
	.otherwise({
		redirectTo : '/'
	});
} ]);

