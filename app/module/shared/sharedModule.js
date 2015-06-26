'use strict';
var shared = angular.module('shared',['ui.router']);

shared.constant('GLOBALS',{
	URL:"../rest/resource/",
	APP_NAME:"Application Name"
})
.constant('VALID_EXPR',{
	ALPHANUM:/^[a-zA-Z0-9]*$/,
	NUMERIC:/^[0-9]+$/
});
