/**
 * Created by mspalti on 1/30/15.
 */

'use strict';

var exhibitDirectives  = angular.module('exhibitDirectives', []);


exhibitDirectives.directive('exhibitMainOption', function() {

    return {
        scope: {
            name: '@'
        },
        restrict: 'E',
        controller: 'MainOptionsCtrl',
        transclude: false,
        templateUrl: '/assets/components/option.html'
    };
});