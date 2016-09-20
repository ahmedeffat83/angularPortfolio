var portfolio = angular.module('portfolio', ['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
		function($stateProvider, $urlRouterProvider, $locationProvider){

	'use strict';

	$urlRouterProvider.otherwise('/about');

	$stateProvider
	.state('about', {
		url: '/about',
		templateUrl: './views/about.html',
		controller: 'aboutCtrl'
	})
	.state('portfolio', {
		url: '/portfolio',
		templateUrl: './views/portfolio.html',
		controller: 'portfolioCtrl'
	})
	.state('experience', {
		url: '/experience',
		templateUrl: './views/experience.html',
		controller: 'experienceCtrl'
	})
	.state('contact', {
		url: '/contact',
		templateUrl: './views/contact.html',
		controller: 'contactCtrl'
	});

	//$locationProvider.html5Mode(true);

}])
	
