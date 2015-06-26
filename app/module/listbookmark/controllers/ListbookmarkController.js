'use strict';

var listbookmark = angular.module('listbookmark');

listbookmark.controller("listbookmarkController",
	function($scope,$rootScope,$state,$filter,SharedService){
    	$scope.bookmarkList = SharedService.getBookMarkList();	

    }
);