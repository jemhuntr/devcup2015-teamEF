(function() {

	// define global application controller
	var app = angular.module("app", [
		// application dependencies
		"ui.router",
		"ui.router.title",
		"app.directives",
		"app.states"
	]);

	// configure/init application
	app.config(function($urlRouterProvider) {

		// set fallback state for ui router
		// redirects back to homepage
		$urlRouterProvider.otherwise("/");
	});

	// application controller
	app.controller("AppCtrl", function() {
	});
})();