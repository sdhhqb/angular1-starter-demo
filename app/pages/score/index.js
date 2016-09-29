import angular from 'angular';
import ScoreController from './score.controller';

module.exports = angular
  .module('app.score', [
    ScoreController.name
  ]);