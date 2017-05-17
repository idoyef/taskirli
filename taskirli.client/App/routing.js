(function () {
    angular.module('app').config([
        '$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'Views/home.html',
                controller: 'homeCtrl'
            });
        }
    ]);
})();