'use strict';

var addfolder = angular.module('addfolder');

addfolder.controller("AddfolderController",
	function($scope,$rootScope,$state,$filter,SharedService,DATA,$timeout){
        $scope.addfolderStatus = false;
		$scope.addfolderList = {};
		/*
		* Getting the list of folder
		*/
    	$scope.folderList = SharedService.getFolderList();
    	/*
    	* Add folder method
    	*/	
    	$scope.addfoldersubmit = function(){
    		$scope.addfolderList.id  = $scope.folderList.length;
    		$scope.folderList.push($scope.addfolderList);
    		DATA.FOLDER = $scope.folderList;
            $scope.addfolderStatus = true;
            $scope.addfolderList = {};
            $timeout(function() {   
                $scope.addfolderStatus = false;
            }, 1000);
    	};
    }
);