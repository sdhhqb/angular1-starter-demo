import angular from 'angular';

routes.$inject = ['$urlRouterProvider','$stateProvider'];

function routes ($urlRouterProvider, $stateProvider) {

	$stateProvider.state('home', {
		url: '/home',
		// template: require('./home.template.html'),
		templateProvider: ['$q', function ($q) {
			return $q(function (resolve) {
        require.ensure([], function (require) {
        	resolve(require('./home.template.html'));
      	});
    	});
		}],
		controller: 'HomeController',
		controllerAs: 'home',
		resolve: {
			loadHomeController: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
				return $q(function (resolve) {
					require.ensure([], function (require) {
						var module = require('./home');
						$ocLazyLoad.load({name: 'app.home'});
						resolve(module.controller);
					});
				});
			}]
		}
	});
}

export default angular.module('app.home.routes', [])
	.config(routes);