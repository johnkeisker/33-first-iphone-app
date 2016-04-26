import angular from 'angular';

import config from './config';
import controller from './controller';

let movie = angular.module('tiy.movie', []);

movie.config(config);
movie.controller('MoviesController', controller);

export default movie;
