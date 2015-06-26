var shared=angular.module('shared');      

shared.config(
  function($stateProvider){

      var baseState = {
            name: 'baseState',
            url: '^/baseState',
            abstract: true,
            viewTitle:'Application Name',
            views:{
                'header':{
                  'templateUrl':'module/shared/views/header.html'
                },
                'footer':{
                  'templateUrl':'module/shared/views/footer.html'
                },
                'baseview':{
                  'templateUrl':'module/shared/views/baseview.html'
                }
              }
            
      };           
      $stateProvider.state(baseState);
   }
);    