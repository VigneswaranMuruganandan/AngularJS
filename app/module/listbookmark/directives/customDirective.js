'use strict';

var listbookmark=angular.module('listbookmark');

listbookmark.directive('customDirective', function ($parse) {
  return {
    restrict: 'A',
    link: function ($scope, $elem, attrs) {
	        $elem.on("click",function(){
	        	
	        }

        );
    }
  }
});