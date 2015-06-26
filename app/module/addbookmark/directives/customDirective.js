'use strict';

var addbookmark=angular.module('addbookmark');

addbookmark.directive('customDirective', function ($parse) {
  return {
    restrict: 'A',
    link: function ($scope, $elem, attrs) {
	        $elem.on("click",function(){
	        	
	        }

        );
    }
  }
});