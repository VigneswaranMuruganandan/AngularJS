'use strict';

var addfolder=angular.module('addfolder');

addfolder.directive('customDirective', function ($parse) {
  return {
    restrict: 'A',
    link: function ($scope, $elem, attrs) {
	        $elem.on("click",function(){
	        	
	        }

        );
    }
  }
});