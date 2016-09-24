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
			loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
				return $ocLazyLoad.load('js/controllers/aboutCtrl.js');
			}]
		}
	})
	.state('projects', {
		url: '/projects',
		templateUrl: './views/projects.html',
		controller: 'projectsCtrl',
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
				return $ocLazyLoad.load('js/controllers/projectsCtrl.js');
			}]
		}
	})
	.state('experience', {
		url: '/experience',
		templateUrl: './views/experience.html',
		controller: 'experienceCtrl',
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
				return $ocLazyLoad.load('js/controllers/experienceCtrl.js');
			}]
		}
	})
	.state('contact', {
		url: '/contact',
		templateUrl: './views/contact.html',
		controller: 'contactCtrl',
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
				return $ocLazyLoad.load('js/controllers/contactCtrl.js');
			}]
		}
	});

	//$locationProvider.html5Mode(true);

}])
	
