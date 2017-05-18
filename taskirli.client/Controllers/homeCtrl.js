(function () {
    angular.module('app').controller('homeCtrl', homeCtrl);
    homeCtrl.$inject = ['$scope', '$location', 'homeSvc'];

    function homeCtrl($scope, $location, homeSvc) {
        $scope.test = 'hello';
        homeSvc.getTestData().then(function (response) {
            $scope.test1 = response.data.message;
        });

        $scope.changeView = function (view) {
            $location.path(view);
        }
    }
})();