import angular from 'angular';

class ScoreController {
	constructor () {
		this.name = 'score';
	}

	changeName () {
		this.name = 'angular trip';
	}
}

export default angular
  .module('app.score.controller', [])
  .controller('ScoreController', ScoreController);