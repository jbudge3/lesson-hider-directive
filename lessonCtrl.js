angular.module('directivePractice').controller('lessonCtrl', function($scope, lessonService) {
  $scope.test = lessonService.test;

  $scope.lessonArray = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

  $scope.announceDay = function(lesson, day) {
    if (lesson && day) {
      alert(lesson + ' is active on ' + day + '.');
    } else {
      alert(lesson + ' is not currently scheduled. Check back later!');
    }

  }
});
