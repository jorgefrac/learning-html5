/*=
	Router
*/
(function($) {
	'use strict';
	angular.module('app')
	.config(config);

	function config($routeProvider) {
		$routeProvider
		.when("/", {
			templateUrl : "pages/home.html",
			controller: "HomeController"
		})
		.when("/tables", {
			templateUrl : "pages/tables.html",
			controller: "TablesController"
		});
	}
})();

