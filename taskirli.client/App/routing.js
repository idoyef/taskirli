(function () {
    angular.module('app').config([
        '$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'Views/home.html',
                controller: 'homeCtrl'
            }).when('/test', {
                templateUrl: 'Views/test.html',
                controller: 'homeCtrl'
            }).when('/test2', {
                templateUrl: 'Views/test2.html',
                controller: 'homeCtrl'
            }).when('/about', {
                templateUrl: 'Views/test.html',
                controller: 'homeCtrl'
            }).when('/services', {
                templateUrl: 'Views/test.html',
                controller: 'homeCtrl'
            }).when('/portfolio', {
                templateUrl: 'Views/test.html',
                controller: 'homeCtrl'
            }).when('/pricing', {
                templateUrl: 'Views/test.html',
                controller: 'homeCtrl'
            }).when('/contact', {
                templateUrl: 'Views/test.html',
                controller: 'homeCtrl'
            });
        }
    ]);
})();