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
	.state('projects', {
		url: '/projects',
		templateUrl: './views/projects.html',
		controller: 'projectsCtrl',
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', '$timeout', '$q',
				function($ocLazyLoad, $timeout, $q) {
					var deferred = $q.defer();
					$timeout(function() {
						deferred.resolve($ocLazyLoad.load('js/controllers/projectsCtrl.js'));
					}, 500);
					return deferred.promise;
				}]
		}
	})
	.state('experience', {
		url: '/experience',
		templateUrl: './views/experience.html',
		controller: 'experienceCtrl',
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', '$timeout', '$q',
				function($ocLazyLoad, $timeout, $q) {
					var deferred = $q.defer();
					$timeout(function() {
						deferred.resolve($ocLazyLoad.load('js/controllers/experienceCtrl.js'));
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
		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
			if (toState.resolve) {
				$rootScope.loader = true;
			}
		});
		$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
			if (toState.resolve) {
				$timeout(function() {
					$rootScope.loader = false;
				}, 250);
			}
		});
	});
	
