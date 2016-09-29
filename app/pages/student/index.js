import angular from 'angular';
import StudentController from './student.controller';

module.exports = angular
  .module('app.student', [
    StudentController.name
  ]);