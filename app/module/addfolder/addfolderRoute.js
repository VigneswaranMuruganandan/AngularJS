'use strict';
var addfolder = angular.module('addfolder');
addfolder.config(
    function ($stateProvider) {
        var addfolder = {
        		name: 'baseState.addfolder',
                url: '^/addfolder',
                viewTitle: 'Dashboard',
                resolve: {},
                data: {
                    title: 'Dashboard',
                    breadcrumbs: true
                },
                views: {
                    '': {
                        'templateUrl': 'module/addfolder/views/addfolder.html',
                        controller: function ($scope) {
                            
                        }
                    }
                }
        };
        $stateProvider.state(addfolder)
        
    }
);