import angular from 'angular';

class StudentController {
	constructor () {
		this.name = 'student';
	}

	changeName () {
		this.name = 'angular trip';
	}
}

export default angular
  .module('app.student.controller', [])
  .controller('StudentController', StudentController);