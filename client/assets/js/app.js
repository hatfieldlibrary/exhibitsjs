(function() {
    'use strict';

    angular.module('exhibitsApp', [
        'ui.router',
        'ngAnimate',
        'ngSanitize',
        'slick',

        'exhibitControllers',
        'exhibitServices',
        'exhibitDirectives',


        //foundation
        'foundation',
        'foundation.core',
        'foundation.dynamicRouting',
        'foundation.dynamicRouting.animations'
    ])
        .config(config)
        .run(run)
    ;

    ;
    config.$inject = ['$urlRouterProvider', '$locationProvider'];

    function config($urlProvider, $locationProvider) {
        $urlProvider.otherwise('/');

        $locationProvider.html5Mode({
            enabled:false,
            requireBase: false
        });

        $locationProvider.hashPrefix('!');
    }

    function run() {
        FastClick.attach(document.body);
    }

})();
