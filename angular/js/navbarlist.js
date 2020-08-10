var app = angular.module("myApp", ['ngRoute','ngTouch','ngAnimate','ui.bootstrap']);
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
	
	app.controller("mainController", function($scope,$http,$routeParams,$uibModal){
	         
		$scope.showPopup = function(){	
					
		  user = {'first_name':'JON','last_name':'Smith','address':'Ny'};
		  $scope.modalInstance = $uibModal.open({
				 ariaLabelledBy: 'modal-title',
				 ariaDescribedBy: 'modal-body',
				 templateUrl: 'view.html',
				 controller :'ModelHandlerController',
				 controllerAs: '$ctrl',
				 size: 'lg',
				 resolve: {
					  user: function(){
							return user;
						 }
					}
			   });
			   
		}
						
	    
	});
	
app.controller("ModelHandlerController",function($scope,$uibModalInstance,$http){
  
		
		$scope.first_name = user.first_name;
		$scope.last_name = user.last_name;
		$scope.address  = user.address;
		
		 $scope.cancelModal = function(){
			 console.log("cancelmodal");
			 $uibModalInstance.dismiss('close');
		 }
		 $scope.ok = function(){
		 $uibModalInstance.close('save');
		 
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
