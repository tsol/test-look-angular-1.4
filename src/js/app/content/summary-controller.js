function summaryController($scope, $itemService) {
  $scope.items = $itemService.getItems();

  console.log('summary controller', $scope);

  $scope.lastItemTitle = function () {
    if ($scope.items.length === 0) return null;
    const last = $scope.items[$scope.items.length - 1];
    return last.title;
  };

  $scope.computedTags = function () {
    const uniqueTags = new Set();
    $scope.items.forEach((item) => {
      item.tags.forEach((tag) => {
        uniqueTags.add(tag);
      });
    });
    return Array.from(uniqueTags).join(', ');
  };
}
