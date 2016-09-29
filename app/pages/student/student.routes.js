import angular from 'angular';

routes.$inject = ['$urlRouterProvider','$stateProvider'];

function routes ($urlRouterProvider, $stateProvider) {

	$stateProvider.state('student', {
		url: '/student',
		templateProvider: ['$q', function ($q) {
			return $q(function (resolve) {
        require.ensure([], function (require) {
        	resolve(require('./student.template.html'));
      	});
    	});
		}],
		controller: 'StudentController',
		controllerAs: 'student',
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

export default angular.module('app.student.routes', [])
	.config(routes);