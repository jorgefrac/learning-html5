/*=
	App
*/
(function($){
	'use strict';
	angular.module('app')
	.controller('AppController', App);

	function App($scope){
		$scope.section = "APP";
		console.log('APP');
	}

})();