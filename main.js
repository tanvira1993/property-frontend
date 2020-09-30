var propertyApp = angular.module("propertyApp", [
	"ui.router",	
	"oc.lazyLoad",
	"ui.bootstrap",
	]); 

propertyApp.controller('AppController', ['$scope', '$rootScope', '$location', '$timeout', '$http','$stateParams','$window',function($scope, $rootScope, $location, $timeout, $http,$stateParams,$window) {
	$scope.$on('$viewContentLoaded', function() {

	});
}]);

/* Setup App run functions*/
propertyApp.run(['$rootScope', '$http','$state','$window', '$filter', '$location',
	function($rootScope, $http, $state,$window, $filter,$location) {
		console.log('hello from template main js')

	}]);
