'use strict';

var app = angular.module('mainapp', ['ui.router',
                                     'shared',
                                     'listbookmark',
                                     'addbookmark',
                                     'addfolder']);
app.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$httpProvider',
   function($stateProvider, $urlRouterProvider,$httpProvider){
	   $urlRouterProvider.otherwise("/listbookmark");	 
	   
	   /*
       * Enable cross domain calls
       */
	   $httpProvider.defaults.useXDomain = true;
   }
]);

app.run(function ($location,$state,$rootScope,$window) {
    $state.go('baseState.listbookmark');
    
    $rootScope.$on("$stateChangeStart", function (event, currentRoute, previousRoute) {

    });
    $rootScope.$on("$stateChangeSuccess", function (event, currentRoute, previousRoute) {
        //console.log("route changed ", currentRoute,previousRoute);
        $rootScope.viewTitle = currentRoute.viewTitle;
    });
    $rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams, error) {
        //console.log("route change error ", event,fromState,toState,error);            
    });
});