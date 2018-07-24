var app = angular.module("myApp", ["ngMaterial", "ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/partials/home.htm',
            controller: 'ctrlHome'
        })
        .when('/buMain', {
            templateUrl: '/partials/buMain.htm',
            controller: 'ctrlBuMain'
        })
        .when('/buMain/buSumm', {
            templateUrl: '/partials/buSumm.htm',
            controller: 'ctrlBuSumm'
        })




        .when('/vuMain', {
            templateUrl: '/partials/vuMain.htm',
            controller: 'ctrlCuring'
        })
        .when('/tuMain', {
            templateUrl: '/partials/tuMain.htm',
            controller: 'ctrlUniformity'
        })
        .when('/ftMain', {
            templateUrl: '/partials/ftMain.htm',
            controller: 'ctrlFullTrace'
        })
        .otherwise({
            redirectTo: '/'
        });
});


