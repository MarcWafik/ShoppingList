AppControllers.controller('BasketCtrl', function ($scope, BasketService) {

    $scope.update = function () {
        $scope.items = BasketService.get();
        $scope.total = BasketService.getTotal().toFixed(2);
    }

    $scope.update();

});
