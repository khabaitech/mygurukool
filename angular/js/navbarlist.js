var app = angular.module("myApp",['ngRoute']);
	app.controller("myctrl",function($scope){
           $scope.navlist = [
               {name:'Home',link:'#!home'},
               {name:'About',link:'#!about'},
               {name:'Contact',link:'#!contact'},
               {name:'RequestByTeacher',link:'#!requestbyteacher'},
               {name:'RequestByStudent',link:'#!requestbystudent'},
               {name:'Subjects',link:'#!subject'}
           ];
	});
	app.controller('ModalCtrl', function($scope, $uibModal) {

	  $scope.open = function() {
	    var modalInstance =  $uibModal.open({
	      templateUrl: "modalContent.html",
	      controller: "ModalContentCtrl",
	      size: '',
	    });

	    modalInstance.result.then(function(response){
		$scope.result = `${response} button hitted`;
	    });

	  };
	})

	app.controller('ModalContentCtrl', function($scope, $uibModalInstance) {

	  $scope.ok = function(){
	    $uibModalInstance.close("Ok");
	  }

	  $scope.cancel = function(){
	    $uibModalInstance.dismiss();
	  } 

	});




  //routing pages to their destination

  app.config(function($routeProvider){
    $routeProvider
    .when("/",
    {
      templateUrl : "angular/app/home.html"
    })
    .when("/about",
    {
      templateUrl : "angular/app/home.html"
    })
    .when("/contact",
    {
      templateUrl : "angular/app/home.html"
    })
    .when("/login",
    {
      templateUrl : "angular/app/login1.html"
    })
    .when("/requestbyteacher",
    {
      templateUrl : "angular/app/login.html"
    })
    .when("/requestbystudent",
    {
      templateUrl : "angular/app/std_request.html"
    })
    .when("/subject",
    {
      templateUrl : "angular/app/home.html"
    })
    .when("/home",
    {
      templateUrl : "angular/app/home.html"
    });

  });
