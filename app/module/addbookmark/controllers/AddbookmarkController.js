'use strict';

var addbookmark = angular.module('addbookmark');

addbookmark.controller("AddbookmarkController",
	function($scope,$rootScope,$state,$filter,SharedService,DATA,$timeout){    
		/*
		* Getting the list of folder / bookmark
		*/
		$scope.bookmarkdata = {};
		$scope.addbookmarkStatus = false;
		$scope.folderList = SharedService.getFolderList();
    	$scope.bookmarkList = SharedService.getBookMarkList();
    	/*
    	*
    	*/
    	$scope.addbookmarkSubmit = function(){
    		$scope.bookmarkList.push($scope.bookmarkdata);
    		DATA.BOOKMARKLIST = $scope.bookmarkList;
    		$scope.bookmarkdata = {};
    		$scope.addbookmarkStatus = true;
    		$timeout(function() {	
    			$scope.addbookmarkStatus = false;
		    }, 1000);
    	};
    }
);