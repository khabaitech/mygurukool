app = angular.module("spaApp",[]);

app.controller("requestTeacherFormCtrl",function($scope){
    $scope.classes = [
     '1','2','3','4','5','6','7','8','9'
    ];
    $scope.subjects = [
      'maths','science','English','Computer Science','Geography','General Studies','Programming'
    ];
});
