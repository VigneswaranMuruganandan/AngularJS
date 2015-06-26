'use strict';

var shared=angular.module('shared');

shared.filter('customFilter',function(DATA){
	return function(items,val){
		if(items){
			var folderList = DATA.FOLDER;
			for(var i=0;i<folderList.length;i++){
				if(folderList[i].id == items){
					return folderList[i].name;
				}
			}
		}
		
	}
});
