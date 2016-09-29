import angular from 'angular';

class ScoreController {
	constructor ($http) {
		this.name = 'score';
		this.scores = [];
		this.httpServer = $http;

		var self = this;
		$http.get('json/scorelist.json').then(function(response) {
			if (response.data && response.data.status == 200) {
      	self.scores = response.data.data;
			}
    });
	}
}
ScoreController.$inject = ['$http'];

export default angular
  .module('app.score.controller', [])
  .controller('ScoreController', ScoreController);