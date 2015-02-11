/**
 * Created by mspalti on 1/30/15.
 */

'use strict';

var exhibitDirectives  = angular.module('exhibitDirectives', []);

exhibitDirectives.directive('exhibitMainOption', function() {

    return {
        scope: {
            mainNav: '=',
            index: '@'
        },
        restrict: 'EA',
        controller: 'MainOptionsCtrl',
        transclude: false,
        templateUrl: 'assets/components/option.html'

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
        templateUrl: 'assets/components/secondaryoption.html'
    };
});

exhibitDirectives.directive('pageCarousel', function() {
    return {
        scope: false,
        restrict: 'EA',
        replace: true,
        templateUrl: 'assets/components/pageTurner.html'
    }
});

exhibitDirectives.directive('exhibitPanel', ['FoundationApi','$timeout', function(foundationApi, $timeout) {

    return {
        scope: {
            panelPosition: '=',
            pageIndex: '@',
            updatePage: '&',
            context: '='
        },
        restrict: 'EA',
        templateUrl: 'assets/components/exhibitPanel.html',
        transclude: true,
        replace: true,

        // The compile function is based on Foundation for Apps
        // panel module directive. Uses the injected foundationApi
        // service.
        compile: function (tElement, tAttrs, transclude) {

            var type = 'panel';

            return {
                pre: preLink,
                post: postLink
            };

            // preLink and postLink based on foundation's panel
            // directive.  Since this directive also watches for
            // changes in panel position and updates panel content,
            // more happens inside the postLink function.
            function preLink(scope, iElement, iAttrs, controller) {

                iAttrs.$set('zf-closable', type);

            }

            function postLink(scope, element, attrs) {

                scope.position = scope.panelPosition.position || 'left';
                scope.active = false;
                foundationApi.subscribe;

                var oldPosition = 'bottom';

                var animationIn,
                    animationOut,
                    showDelay,
                    updateDelay,
                    globalQueries = foundationApi.getSettings().mediaQueries;

                foundationApi.subscribe(attrs.id, function () {

                    var delay = {};

                    var pageType = scope.context.secondaryNavigation.contentType;

                    if (pageType === undefined) {
                        pageType = scope.context.primaryNavigation.contentCategory;
                    }

                    if (pageType !== undefined) {
                        // delays can be set independently
                        if (pageType === 'text') { // left exit
                            delay = {delayIn: 1200, delayOut: 1700}
                        } else {
                            delay = {delayIn: 1000, delayOut: 1700}
                        }
                    }
                    console.log(pageType) ;

                    // animation behaviour changes with panel position
                    scope.$watch(scope.panelPosition.position, function() {

                        scope.position = scope.panelPosition.position;

                        if (oldPosition != scope.position) {

                            oldPosition = scope.position;
                            scope.positionClass = 'panel-' + scope.position;
                            element.removeClass('panel-' + oldPosition);
                            element.addClass('panel-' + scope.position);
                            scope.setAnimation();
                            scope.hide();
                            scope.delayedAnimation(delay);

                        } else {

                            scope.setAnimation();
                            scope.hide();
                            scope.delayedAnimation(delay);

                        }
                    });

                    scope.$apply();

                    return;

                });

                scope.setAnimation = function() {

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

                };

                // Updates template content and calls animation
                // using $timeout delays. It would be better to
                // use a DOM rendered or callback event, but I
                // wasn't able to accomplish that.
                scope.delayedAnimation = function(delay) {

                    updateDelay = $timeout(function () {
                        scope.updatePage(scope.pageIndex);
                    }, delay.delayIn);

                    showDelay = $timeout(function() {
                        scope.show();
                    }, delay.delayOut);

                };

                // cleanup timers
                scope.$on('$destroy', function () {

                    $timeout.cancel(showDelay);
                    $timeout.cancel(updateDelay);

                });

                // these are the current foundation for apps method calls,
                // using the foundationApi.
                scope.hide = function () {

                    if(scope.active){
                        scope.active = false;
                        foundationApi.animate(element, scope.active, animationIn, animationOut);

                    }

                    return;
                };

                scope.show = function () {

                    if(!scope.active){
                        scope.active = true;
                        foundationApi.animate(element, scope.active, animationIn, animationOut);
                    }
                    return;
                };

                scope.toggle = function () {

                    scope.active = !scope.active;
                    foundationApi.animate(element, scope.active, animationIn, animationOut);
                    return;
                };


                // possibly unnecessary
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




