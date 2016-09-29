import angular from 'angular';
import HomeController from './home.controller';
import AboutController from './about/about.controller';

module.exports = angular
  .module('app.home', [
    HomeController.name,
    AboutController.name
  ]);