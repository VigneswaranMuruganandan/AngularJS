'use strict';

var shared=angular.module('shared');

shared.factory('SharedService', 
  function($http,DATA){
		var bookmark = [],folder = [];
		return {     
        	getBookMarkList: function(){
            bookmark = DATA.BOOKMARKLIST; 
            return bookmark;
          },
          getFolderList : function(){
            folder = DATA.FOLDER;
            return folder;
          },
          addBookmarkList : function(){

          }
        };
  }
);