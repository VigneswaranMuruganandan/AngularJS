var mainapp = angular.module('mainapp');
mainapp.controller("AppController",
    function ($scope, $state, $rootScope, $window, $timeout, SharedService) {
        
        $scope.ALPHANUM = /^[a-zA-Z0-9]*[ ]+[a-zA-Z0-9]*$/; //GLOBALS.ALPHANUM;
        $scope.NUMERIC = /^[0-9]+$/;
        $scope.ALPHABETIC = /^[a-zA-Z]+$/;
        $scope.DECIMAL = /^[0-9]*(?:\.\d{1,2})?$/;
        $scope.POBOX = /^[0-9]{5}(?:-[0-9]{4})?$/;
        $scope.MOBILE = /^05\d{8}$/; //Mobile Num should start with 05 and length 10;
       
        /*
         * Method to make the tab Active
         */
        $scope.isActive = function (tabname) {
            return $state.current.name == tabname;
        };
        /*
         * For getting the selected index for the select Option
         */
         $scope.getSelectIndex = function (values, propName, code) {
            var selVal = -1;
            var param = propName.split('.');
            if(param.length >1){
                angular.forEach(values, function (value, key) {
                    if (value && value[param[0]][param[1]] == code) {
                        selVal = key;
                    }
                });
            }
            if(param.length <=1){
                angular.forEach(values, function (value, key) {
                    if (value && value[propName] == code) {
                        selVal = key;
                    }
                });
            }
            return selVal;
        };
    }
);