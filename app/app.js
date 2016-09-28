import angular from 'angular';
import uirouter from 'angular-ui-router';
import oclazyload from 'oclazyload';

import config from './app.config';
import homeRoutes from './pages/home/home.routes';

angular.module('app', [
  uirouter,
  oclazyload,
  homeRoutes.name
])
.config(config);