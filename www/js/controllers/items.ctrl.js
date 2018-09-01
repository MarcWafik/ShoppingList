AppControllers.controller('ItemsCtrl', function ($scope, $state, ItemService, BasketService) {
  $scope.items = [];

  $scope.queryParams = {
    limit: 60,
    offset: 0,
    sorting: "default",
    q: "milk"
  };

  $scope.update = function () {
    ItemService.get($scope.queryParams).then((result) => $scope.items = result.data.products);
  }

  $scope.update();

  $scope.itemTapped = function (item) {
    BasketService.add(item);
    $state.go('app.basket');
  }

})
