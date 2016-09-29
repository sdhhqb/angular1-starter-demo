import angular from 'angular';

class AboutController {
	constructor () {
		this.name = 'about';
		this.info = 'home 是主页面';
	}
}

export default angular
  .module('app.home.about.controller', [])
  .controller('AboutController', AboutController);