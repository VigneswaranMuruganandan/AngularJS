'use strict';
var addbookmark = angular.module('addbookmark');
addbookmark.config(
    function ($stateProvider) {
        var addbookmark = {
        		name: 'baseState.addbookmark',
                url: '^/addbookmark',
                viewTitle: 'Dashboard',
                resolve: {},
                data: {
                    title: 'Dashboard',
                    breadcrumbs: true
                },
                views: {
                    '': {
                        'templateUrl': 'module/addbookmark/views/addbookmark.html',
                        controller: function ($scope) {
                            
                        }
                    }
                }
        };
        $stateProvider.state(addbookmark)
        
    }
);