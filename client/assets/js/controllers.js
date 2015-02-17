'use strict';

var exhibitControllers = angular.module('exhibitControllers', []);


exhibitControllers.controller('MainOptionsCtrl',
    ['exhibitLayoutFactory','$scope', function(exhibitLayoutFactory, $scope) {

        $scope.layout = {};
        $scope.context = {};
        $scope.panelPosition = {position:'bottom'};
        $scope.selectedItem = null;
        $scope.selectedPrimary = null;
        $scope.showBackgroundImage = true;


        $scope.init = exhibitLayoutFactory.init(function(layout) {

            $scope.layout = layout;
            exhibitLayoutFactory.updateSelectedItem(0);
            $scope.context = exhibitLayoutFactory.context;

        });


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
                $scope.panelPosition.position = 'right';
            } else if (type === 'text' || type === 'pagesArray') {
                $scope.panelPosition.position = 'bottom';
            }

        };


        $scope.setSelectedItem = function(index) {

            $scope.selectedItem = index;

        };


        $scope.setSelectedPrimary = function(index) {

            $scope.selectedPrimary = index;

        };



    }]);


exhibitControllers.controller('CitationsCtrl',
    ['$scope', function( $scope) {

        $scope.addDelimiter = function(text) {

            if (text !== undefined && text.length > 0) {
                return ". ";
            }
        }

    }]);
