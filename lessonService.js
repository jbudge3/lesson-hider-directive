angular.module('directivePractice').service('lessonService', function($http) {
  this.test = "Service test";

  this.getSchedule = function() {
    return $http.get('schedule.json');
  }
});
