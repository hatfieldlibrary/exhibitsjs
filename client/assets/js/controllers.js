'use strict';

var exhibitControllers = angular.module('exhibitControllers', []);


exhibitControllers.controller('MainOptionsCtrl',
    ['exhibitLayoutFactory','$scope', function(exhibitLayoutFactory, $scope) {

    $scope.layout = exhibitLayoutFactory.layout;
    $scope.context = {};

    $scope.setPageIndex = function (position) {

        exhibitLayoutFactory.setPageIndex(position);
        $scope.context = exhibitLayoutFactory.context;

    };

    $scope.setCurrentPage = function (position) {

        exhibitLayoutFactory.setCurrentPage(position);
        $scope.context = exhibitLayoutFactory.context;

    };

    $scope.updateSelectedItem = function(position) {

        exhibitLayoutFactory.updateSelectedItem(position);
        $scope.context = exhibitLayoutFactory.context;
    };

        $scope.myCallback = function() {
            alert('got the callback');
        };

    $scope.isTextInfo = function() {

        if (exhibitLayoutFactory.contentCategory === 'textinfo') {
            return true;
        }
        return false;
    };

}]);