import angular from 'angular';

class HomeController {
	constructor () {
		this.name = 'home';
	}

	changeName () {
		this.name = 'angular trip';
	}
}

export default angular
  .module('app.home.controller', [])
  .controller('HomeController', HomeController);