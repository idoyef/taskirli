(function () {
    angular.module('app').controller('homeCtrl', homeCtrl);
    homeCtrl.$inject = ['$scope', 'homeSvc'];

    function homeCtrl($scope, homeSvc) {
        $scope.test = 'hello';
        homeSvc.getTestData().then(function (response) {
            $scope.test1 = response.data.message;
        });
    }
})();