import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './app.config';
import home from './pages/home';

angular.module('app', [
  uirouter,
  home
]).config(routes);

// function homeRouting($urlRouterProvider, $stateProvider) {
//   $urlRouterProvider.otherwise('/home');

//   $stateProvider
//     .state('home', {
//       url: '/home',
//       template: require('./views/home.html'),
//       controller: 'HomeController as vm',
//       resolve: {
//         loadHomeController: ($q, $ocLazyLoad) => {
//           return $q((resolve) => {
//             require.ensure([], () => {
//               // load whole module
//               let module = require('./home');
//               $ocLazyLoad.load({name: 'home'});
//               resolve(module.controller);
//             });
//           });
//         }
//       }
//     }).state('home.about', {
//       url: '/about',
//       template: require('./views/home.about.html'),
//       controller: 'HomeAboutController as vm',
//     });
// }