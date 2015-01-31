/**
 * Created by mspalti on 1/30/15.
 */
'use strict';

var exhibitControllers = angular.module('exhibitControllers', []);


exhibitControllers.controller('MainOptionsCtrl', ['$scope', function($scope) {

    $scope.options = [
        {name: 'Painting'},
        {name: 'Photography'},
        {name: 'Travel'}
    ];


}]);