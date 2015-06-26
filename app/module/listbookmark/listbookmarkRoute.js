'use strict';
var listbookmark = angular.module('listbookmark');
listbookmark.config(
    function ($stateProvider) {
        var listbookmark = {
        		name: 'baseState.listbookmark',
                url: '^/listbookmark',
                viewTitle: 'Dashboard',
                resolve: {},
                data: {
                    title: 'Dashboard',
                    breadcrumbs: true
                },
                views: {
                    '': {
                        'templateUrl': 'module/listbookmark/views/listbookmark.html',
                        controller: function ($scope) {
                            
                        }
                    }
                }
        };
        $stateProvider.state(listbookmark)
        
    }
);