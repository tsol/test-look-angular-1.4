function contentController($scope, $itemService) {
  $scope.items = $itemService.getItems();
  $scope.orderFields = ['title', 'date'];

  $scope.selection = $itemService.getSelection();

  $scope.orderBy = 'title';
  $scope.hideDate = false;
  $scope.search = { title: '' };

  $scope.newItem = { title: '' };

  $scope.addItem = () => {
    $itemService.addItemByTitle($scope.newItem.title);
    $scope.newItem = { title: '' };
  };

  $scope.selectItemById = (id) => {
    $itemService.selectItemById(id);
  };

  $scope.isSelected = (item) => {
    return $itemService.isSelected(item);
  };
}
