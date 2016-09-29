import angular from 'angular';

class StudentController {
	constructor ($http) {
		this.name = 'student';
		this.students = [];
		this.httpServer = $http;

		var self = this;
		$http.get('json/studentlist.json').then(function(response) {
			if (response.data && response.data.status == 200) {
      	self.students = response.data.data;
			}
    });
	}
}
StudentController.$inject = ['$http']

export default angular
  .module('app.student.controller', [])
  .controller('StudentController', StudentController);