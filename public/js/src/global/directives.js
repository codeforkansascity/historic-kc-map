(function(){

angular.module('historic.global.directives', []);

function statefulBtn(){
  return {
    restrict:'EA',
    scope:{
      value:'=',
      send:'='
    },
    controller:function($scope){
      $scope.options = {
        original:{
          text:'Test'
        },
        inProgress:{
          text:'Testing...'
        },
        success:{
          text:'Success!'
        },
        error:{
          text:'Error.'
        }
      }
      $scope.state = $scope.state || $scope.options.original;
      $scope.click = function(){
        $scope.state = $scope.options.inProgress;
        $scope.send().then(function(res){
          $scope.state = $scope.options.success;
        }, function(err){
          $scope.state = $scope.options.error;
        })
      }
    }
  }
}
angular.module('historic.global.directives').directive('statefulBtn', statefulBtn);

function preventDefaultA(){
  return {
    restrict: 'E',
    link: function(scope, elem, attrs) {
      if(attrs.ngClick || attrs.href === '' || attrs.href === '#'){
        elem.on('click', function(e){
            e.preventDefault();
        });
      }
    }
 };
}
angular.module('historic.global.directives').directive('preventDefaultA', preventDefaultA);

function contextMenu(){
  return {
    restrict:'EA',
    templateUrl:'/public/js/src/global/partials/context-menu.html',
    controller:function($scope){
      console.log($scope);
    }
  }
}
angular.module('historic.global.directives').directive('contextMenu', contextMenu);


})();//IIFE