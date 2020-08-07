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
