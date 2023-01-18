function sidebarController($scope, $itemService) {
  $scope.selection = $itemService.getSelection();
  $scope.form = { newTag: '' };

  $scope.removeTagByIndex = (index) => {
    const newTags = [...$scope.selection.item.tags];
    newTags.splice(index, 1);
    $itemService.updateSelectedItem({ tags: newTags });
  };

  $scope.addTag = () => {
    if (!$scope.form.newTag) return; // todo: toast here
    $itemService.updateSelectedItem({
      tags: [...$scope.selection.item.tags, $scope.form.newTag],
    });
    $scope.form.newTag = '';
  };
}
