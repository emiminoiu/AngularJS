var app = angular.module('SuggestionBox', ['ngRoute']);
/*
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'views/home.html'
        })
        .when('/suggestion/:id', {
            controller: 'SuggestionController',
            templateUrl: 'views/suggestion.html'
        })
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'views/login.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
*/
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'LoginController',
            templateUrl: 'views/login.html'
        })
        .when('/suggestion/:id', {
            controller: 'SuggestionController',
            templateUrl: 'views/suggestion.html'
        })
        .when('/home', {
            controller: 'HomeController',
            templateUrl: 'views/home.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});