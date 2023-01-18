angular
  .module('app', ['templates'])
  .factory('$itemService', [createitemService])
  .directive('app', () => {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: './js/app/app.tpl.html',
    };
  })
  .directive('contentView', () => {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: './js/app/content/content-view.tpl.html',
      controller: ['$scope', '$itemService', contentController],
    };
  })
  .directive('sidebarView', () => {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: './js/app/sidebar/sidebar-view.tpl.html',
      controller: ['$scope', '$itemService', sidebarController],
    };
  })
  .directive('elementsView', () => {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: './js/app/elements/elements-view.tpl.html',
      controller: ['$scope', '$element', elementsViewCtrl],
    };
    function elementsViewCtrl($scope, $element) {
      $scope.model = {
        width: 300,
      };
      $scope.setWidth = () => {
        let width = $scope.model.width;
        if (!width) {
          width = 1;
          $scope.model.width = width;
        }
        $element.css('width', `${width}px`);
      };
      $scope.setWidth();
    }
  })
  .directive('some1', () => {
    return {
      scope: {},
      restrict: 'E',
      template: '<some-2></some-2>',
    };
  })
  .directive('some2', () => {
    return {
      scope: {},
      restrict: 'E',
      template: '<some-3></some-3>',
    };
  })
  .directive('some3', () => {
    return {
      scope: {},
      restrict: 'E',
      template: '<summary-view></summary-view>',
    };
  })
  .directive('summaryView', () => {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: './js/app/content/summary-view.tpl.html',
      controller: ['$scope', '$itemService', summaryController],
    };
  })
  .directive('clickOutside', [
    '$document',
    function ($document) {
      return {
        restrict: 'A',
        scope: {
          clickOutside: '&',
        },
        link: function (scope, el, attr) {
          $document.on('click', function (e) {
            if (el !== e.target && !el[0].contains(e.target)) {
              scope.$apply(function () {
                scope.$eval(scope.clickOutside);
              });
            }
          });
        },
      };
    },
  ]);
