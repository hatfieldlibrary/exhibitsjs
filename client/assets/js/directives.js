/**
 * Created by mspalti on 1/30/15.
 */

'use strict';

var exhibitDirectives  = angular.module('exhibitDirectives', []);


exhibitDirectives.directive('exhibitBookTurner', function($window, $document) {

    return {
        //scope: {
        //    groupTitle: '@',
        //    images: '='
        //},
        scope: false,
        restrict: 'E',
        templateUrl: '/assets/components/pageTurner.html'

    }

});

exhibitDirectives.directive('exhibitImageArray', function() {

    return {
        //scope: {
        //    groupTitle: '@title',
        //    images: '='
        //},
        scope: false,
        restrict: 'E',
        controller: 'MainOptionsCtrl',
        templateUrl: '/assets/components/imageArray.html'
    }

});

exhibitDirectives.directive('exhibitImage', ['$timeout', function($timeout) {

    return {
        //scope: {
        //    title: '@',
        //    description: '@',
       //     url: '@'
        //},
        scope: false,
        restrict: 'E',
        controller: 'MainOptionsCtrl',
        templateUrl: '/assets/components/image.html',
        link: function (scope, element, attrs) {
            scope.hidePanel = false;
            scope.$watch('url', function() {
                scope.image;
                $timeout(function() {
                    //   scope.hidePanel = false;
                    scope.image = scope.url;

                }, 390);
            });
            element.ready(scope.myCallback());

        }
    }

}]);

exhibitDirectives.directive('exhibitText', ['$timeout', function($timeout) {

    return {
        //scope: {
       //     description: '@'
       // },
        scope: false,
        restrict: 'EA',
        // controller: 'MainOptionsCtrl',
        templateUrl: '/assets/components/text.html',
        compile: false,
        link: function (scope, element, attrs) {
            scope.hidePanel = false;
            scope.$watch('url', function() {
                scope.image;
                $timeout(function() {
                    //   scope.hidePanel = false;
                    scope.content = scope.description;

                }, 330);
            });
        }

    }

}]);


exhibitDirectives.directive('exhibitMainOption', function() {

    return {
        scope: {
            mainNav: '=',
            index: '@'
        },
        restrict: 'EA',
        controller: 'MainOptionsCtrl',
        transclude: false,
        templateUrl: '/assets/components/option.html'

    };
});

exhibitDirectives.directive('exhibitSecondaryOption', function() {

    return {
        scope: {
            section: '='
        },
        restrict: 'E',
        controller: 'MainOptionsCtrl',
        transclude: false,
        templateUrl: '/assets/components/secondaryoption.html'
    };
});

exhibitDirectives.directive('exhibitTestPanel', function() {
     return {
         scope: {
             position: '@?',
             pageIndex: '@',
             updatePage: '&'

         },
         restrict: 'EA',
         templateUrl: '/assets/components/exhibitPanel.html',
         transclude: true,
         replace: true,
         compile: function (tElement, tAttrs, transclude) {

             var type = 'panel';

             return {
                 pre: preLink,
                 post: postLink
             };

             function preLink(scope, iElement, iAttrs, controller) {

                 iAttrs.$set('zf-closable', type);
                 scope.position = scope.position || 'left';
                 scope.positionClass = 'panel-' + scope.position;



             }

             function postLink(scope, element, attrs) {


                 scope.active = false;
                 foundationApi.subscribe
                 var delay;
                 var animationIn, animationOut;
                 var globalQueries = foundationApi.getSettings().mediaQueries;

                 //urgh, there must be a better way
                 if (scope.position === 'left') {
                     animationIn = attrs.animationIn || 'slideInRight';
                     animationOut = attrs.animationOut || 'slideOutLeft';
                 } else if (scope.position === 'right') {
                     animationIn = attrs.animationIn || 'slideInLeft';
                     animationOut = attrs.animationOut || 'slideOutRight';
                 } else if (scope.position === 'top') {
                     animationIn = attrs.animationIn || 'slideInDown';
                     animationOut = attrs.animationOut || 'slideOutUp';
                 } else if (scope.position === 'bottom') {
                     animationIn = attrs.animationIn || 'slideInUp';
                     animationOut = attrs.animationOut || 'slideOutBottom';
                 }

                 attrs.$set('overflow', 'scroll');


                 //setup
                 foundationApi.subscribe(attrs.id, function () {


                     //scope.hide();
                     //    foundationApi.animate(element, scope.active, animationIn, animationOut);
                     //scope.hide();
                     //
                     foundationApi.animate(element, scope.active, animationIn, animationOut);
                    // delay = $timeout(function () {
                         //scope.show();
                       //  scope.updatePage(scope.pageIndex);
                         //foundationApi.animate(element, scope.active, animationIn, animationOut);
                         //  scope.show();

                    // }, 800);

                     scope.$apply();

                     return;

                 });

                 scope.hide = function () {
                     scope.active = false;
                     return;
                 };

                 scope.show = function () {
                     scope.active = true;
                     return;
                 };

                 scope.toggle = function () {
                     scope.active = !scope.active;
                     return;
                 };

                 scope.$on('$destroy', function () {
                     $timeout.cancel(delay);
                 });

                 element.on('click', function (e) {
                     //check sizing
                     var srcEl = e.srcElement;

                     if (!matchMedia(globalQueries.medium).matches && srcEl.href && srcEl.href.length > 0) {
                         //hide element if it can't match at least medium
                         scope.hide();
                         foundationApi.animate(element, scope.active, animationIn, animationOut);
                     }
                 });
             }

         }

     };

});

exhibitDirectives.directive('exhibitPanelTop', ['FoundationApi','$timeout', function(foundationApi, $timeout) {

    return {
        scope: {
            position: '@?',
            pageIndex: '@',
            updatePage: '&'

        },
        restrict: 'EA',
        templateUrl: '/assets/components/exhibitPanel.html',
        transclude: true,
        replace: true,
        compile: function (tElement, tAttrs, transclude) {

            var type = 'panel';

            return {
                pre: preLink,
                post: postLink
            };

            function preLink(scope, iElement, iAttrs, controller) {

                iAttrs.$set('zf-closable', type);
                scope.position = scope.position || 'left';
                scope.positionClass = 'panel-' + scope.position;

            }

            function postLink(scope, element, attrs) {

                scope.active = false;
                foundationApi.subscribe
                var delay;
                var animationIn, animationOut;
                var globalQueries = foundationApi.getSettings().mediaQueries;

                //urgh, there must be a better way
                if (scope.position === 'left') {
                    animationIn = attrs.animationIn || 'slideInRight';
                    animationOut = attrs.animationOut || 'slideOutLeft';
                } else if (scope.position === 'right') {
                    animationIn = attrs.animationIn || 'slideInLeft';
                    animationOut = attrs.animationOut || 'slideOutRight';
                } else if (scope.position === 'top') {
                    animationIn = attrs.animationIn || 'slideInDown';
                    animationOut = attrs.animationOut || 'slideOutUp';
                } else if (scope.position === 'bottom') {
                    animationIn = attrs.animationIn || 'slideInUp';
                    animationOut = attrs.animationOut || 'slideOutBottom';
                }

                attrs.$set('overflow', 'scroll');


                //setup
                foundationApi.subscribe(attrs.id, function () {

                    //scope.hide();
                //    foundationApi.animate(element, scope.active, animationIn, animationOut);
                    //scope.hide();
                    //
                    foundationApi.animate(element, scope.active, animationIn, animationOut);
                    delay = $timeout(function () {
                        //scope.show();
                        scope.updatePage(scope.pageIndex);
                        //foundationApi.animate(element, scope.active, animationIn, animationOut);
                      //  scope.show();

                    }, 800);

                    scope.$apply();

                    return;

                });

                scope.hide = function () {
                    scope.active = false;
                    return;
                };

                scope.show = function () {
                    scope.active = true;
                    return;
                };

                scope.toggle = function () {
                    scope.active = !scope.active;
                    return;
                };

                scope.$on('$destroy', function () {
                    $timeout.cancel(delay);
                });

                element.on('click', function (e) {
                    //check sizing
                    var srcEl = e.srcElement;

                    if (!matchMedia(globalQueries.medium).matches && srcEl.href && srcEl.href.length > 0) {
                        //hide element if it can't match at least medium
                        scope.hide();
                        foundationApi.animate(element, scope.active, animationIn, animationOut);
                    }
                });
            }

        }
    };
}]);

exhibitDirectives.directive('exhibitPanelRight', ['FoundationApi','$timeout', function(foundationApi, $timeout) {

    return {
        scope: {
            position: '@?',
            pageIndex: '@',
            updatePage: '&'

        },
        restrict: 'EA',
        templateUrl: '/assets/components/exhibitPanel.html',
        transclude: true,
        replace: true,
        compile: function (tElement, tAttrs, transclude) {

            var type = 'panel';

            return {
                pre: preLink,
                post: postLink
            };

            function preLink(scope, iElement, iAttrs, controller) {

                iAttrs.$set('zf-closable', type);
                scope.position = scope.position || 'left';
                scope.positionClass = 'panel-' + scope.position;

            }

            function postLink(scope, element, attrs) {

                scope.active = false;
                foundationApi.subscribe
                var delay;
                var animationIn, animationOut;
                var globalQueries = foundationApi.getSettings().mediaQueries;

                //urgh, there must be a better way
                if (scope.position === 'left') {
                    animationIn = attrs.animationIn || 'slideInRight';
                    animationOut = attrs.animationOut || 'slideOutLeft';
                } else if (scope.position === 'right') {
                    animationIn = attrs.animationIn || 'slideInLeft';
                    animationOut = attrs.animationOut || 'slideOutRight';
                } else if (scope.position === 'top') {
                    animationIn = attrs.animationIn || 'slideInDown';
                    animationOut = attrs.animationOut || 'slideOutUp';
                } else if (scope.position === 'bottom') {
                    animationIn = attrs.animationIn || 'slideInUp';
                    animationOut = attrs.animationOut || 'slideOutBottom';
                }

                attrs.$set('overflow', 'scroll');

                //setup
                foundationApi.subscribe(attrs.id, function () {

                    foundationApi.animate(element, scope.active, animationIn, animationOut);
                    delay = $timeout(function () {
                        //scope.show();
                        scope.updatePage(scope.pageIndex);
                        //foundationApi.animate(element, scope.active, animationIn, animationOut);
                        //  scope.show();

                    }, 950);

                    scope.$apply();

                    return;

                });

                scope.hide = function () {
                    scope.active = false;
                    return;
                };

                scope.show = function () {
                    scope.active = true;
                    return;
                };

                scope.toggle = function () {
                    scope.active = !scope.active;
                    return;
                };

                scope.$on('$destroy', function () {
                    $timeout.cancel(delay);
                });

                element.on('click', function (e) {
                    //check sizing
                    var srcEl = e.srcElement;

                    if (!matchMedia(globalQueries.medium).matches && srcEl.href && srcEl.href.length > 0) {
                        //hide element if it can't match at least medium
                        scope.hide();
                        foundationApi.animate(element, scope.active, animationIn, animationOut);
                    }
                });
            }

        }
    };
}]);




