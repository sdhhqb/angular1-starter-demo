import angular from 'angular';
import uirouter from 'angular-ui-router';
import oclazyload from 'oclazyload';
import bootstrap from 'bootstrap';

import config from './app.config';
import homeRoutes from './pages/home/home.routes';
import scoreRoutes from './pages/score/score.routes';
import studentRoutes from './pages/student/student.routes';

angular.module('app', [
  uirouter,
  oclazyload,
  homeRoutes.name,
  scoreRoutes.name,
  studentRoutes.name
])
.config(config);