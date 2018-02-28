/*=
	Tables
*/
(function($){
	'use strict';
	angular.module('app')
	.controller('TablesController', Tables);

	function Tables($scope){
		$scope.section = "Tables";
		console.log('Tables');
	}
})();