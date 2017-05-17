(function () {
    angular.module('app').service('homeSvc', homeSvc);
    homeSvc.$inject = ['$http'];

    function homeSvc($http) {
        this.getTestData = function () {
            return $http({
                url: 'http://localhost:12284/api/test/getTestData',
                method: 'GET'

            });
        }
    }
})();