'use strict';

var exhibitControllers = angular.module('exhibitControllers', []);


exhibitControllers.controller('MainOptionsCtrl',
    ['exhibitLayoutFactory','$scope', function(exhibitLayoutFactory, $scope) {

        $scope.layout = exhibitLayoutFactory.layout;
        $scope.context = {};
        $scope.panelPosition = {position:'bottom'};
        $scope.selectedItem = null;
        $scope.selectedPrimary = null;

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

        $scope.setPanelPosition = function(type) {

            if (type === 'image') {
                $scope.panelPosition.position = 'bottom';
            } else if (type === 'text' || type === 'pagesArray') {
                $scope.panelPosition.position = 'right';
            }

        } ;

        $scope.setSelectedItem = function(index) {
            $scope.selectedItem = index;
        };

        $scope.setSelectedPrimary = function(index) {
            $scope.selectedPrimary = index;
        };

    }]);