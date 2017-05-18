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
            });
        }
    ]);
})();