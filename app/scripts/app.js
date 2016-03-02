'use strict';

/**
 * @ngdoc overview
 * @name dropzoneWithAngularApp
 * @description
 * # dropzoneWithAngularApp
 *
 * Main module of the application.
 */
var app = angular
    .module('dropzoneWithAngularApp', [
        'ngRoute',
        'ngDropzone',
        'ui.bootstrap',
        'ngImgCrop'
    ])
    .config(function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'scripts/Dashboard/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })            
            .otherwise({
                redirectTo: '/'
            });
    });
