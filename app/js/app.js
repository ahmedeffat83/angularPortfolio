var karakeeb = angular.module('karakeeb', ['ui.router', 'oc.lazyLoad'])
	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
		function($stateProvider, $urlRouterProvider, $locationProvider) {

	'use strict';

	$urlRouterProvider.otherwise('/about');

	$stateProvider
	.state('about', {
		url: '/about',
		templateUrl: './views/about.html',
		controller: 'aboutCtrl',
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', '$timeout', '$q',
				function($ocLazyLoad, $timeout, $q) {
					var deferred = $q.defer();
					$timeout(function() {
						deferred.resolve($ocLazyLoad.load('js/controllers/aboutCtrl.js'));
					}, 500);
					return deferred.promise;
				}]
		}
	})
	.state('work', {
		url: '/work',
		templateUrl: './views/work.html',
		controller: 'workCtrl',
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', '$timeout', '$q',
				function($ocLazyLoad, $timeout, $q) {
					var deferred = $q.defer();
					$timeout(function() {
						deferred.resolve($ocLazyLoad.load('js/controllers/workCtrl.js'));
					}, 500);
					return deferred.promise;
				}]
		}
	})
	.state('contact', {
		url: '/contact',
		templateUrl: './views/contact.html',
		controller: 'contactCtrl',
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', '$timeout', '$q',
				function($ocLazyLoad, $timeout, $q) {
				var deferred = $q.defer();
				$timeout(function() {
					deferred.resolve($ocLazyLoad.load('js/controllers/contactCtrl.js'));
				}, 500);
				return deferred.promise;
			}]
		}
	});

	//$locationProvider.html5Mode(true);

}])
	.run(function($rootScope, $timeout){
		var stateSwitch = null;
		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
			if (toState.resolve) {
				$timeout.cancel(stateSwitch);
				$rootScope.loader = true;
			}
		});
		$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
			if (toState.resolve) {
				stateSwitch = $timeout(function() {
					$rootScope.loader = false;
				}, 500);
			}
		});
	});
	
