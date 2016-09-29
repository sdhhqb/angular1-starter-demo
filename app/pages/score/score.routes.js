import angular from 'angular';

routes.$inject = ['$urlRouterProvider','$stateProvider'];

function routes ($urlRouterProvider, $stateProvider) {

	$stateProvider.state('score', {
		url: '/score',
		templateProvider: ['$q', function ($q) {
			return $q(function (resolve) {
        require.ensure([], function (require) {
        	resolve(require('./score.template.html'));
      	});
    	});
		}],
		controller: 'ScoreController',
		controllerAs: 'score',
		resolve: {
			loadHomeController: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
				return $q(function (resolve) {
					require.ensure([], function (require) {
						var module = require('./index');
						$ocLazyLoad.load({name: module.name});
						resolve(module.controller);
					});
				});
			}]
		}
	});
}

export default angular.module('app.score.routes', [])
	.config(routes);