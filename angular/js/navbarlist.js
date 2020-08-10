    // create the module and name it spaApp
    // also include ngRoute for all our routing needs //,'ngTouch','ngAnimate','ui.bootstrap'
   var spaApp = angular.module('spaApp', ['ngRoute','ngTouch','ngAnimate','ui.bootstrap']);

    // configure our routes
    spaApp.config(function($routeProvider) {
              $routeProvider
              // route for the home page
              .when('/', {
                  templateUrl : 'angular/app/home.html',
                  controller  : 'mainController'
              })
	     .when('/about',
	    {
	      templateUrl : 'angular/app/home.html'
	    })
	    .when('/contact',
	    {
	      templateUrl : 'angular/app/home.html'
	    })
	    .when('/login',
	    {
	      templateUrl : 'angular/app/login1.html'
	    })
	    .when('/requestbyteacher',
	    {
	      templateUrl : 'angular/app/login.html'
	    })
	    .when('/requestbystudent',
	    {
	      templateUrl : 'angular/app/std_request.html'
	    })
	    .when('/subject',
	    {
	      templateUrl : 'angular/app/home.html'
	    })
	    .when('/home',
	    {
	      templateUrl : 'angular/app/home.html'
	    })

    });

spaApp.controller('myctrl', function($scope){
           $scope.navlist = [
               {name:'Home',link:'#!home'},
               {name:'About',link:'#!about'},
               {name:'Contact',link:'#!contact'},
               {name:'RequestByTeacher',link:'#!requestbyteacher'},
               {name:'RequestByStudent',link:'#!requestbystudent'},
               {name:'Subjects',link:'#!subject'}
           ];
	});

// create the controller and inject Angular's $scope
spaApp.controller('mainController', function($scope,$http,$routeParams,$uibModal){
	         
		$scope.showPopup = function(){	
					
		  user = {'first_name':'JON','last_name':'Smith','address':'Ny'};
		  $scope.modalInstance = $uibModal.open({
				 ariaLabelledBy: 'modal-title',
				 ariaDescribedBy: 'modal-body',
				 templateUrl: 'angular/app/view.html',
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
	
spaApp.controller("ModelHandlerController",function($scope,$uibModalInstance,$http){
  
		
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
	
	
// create the controller and inject Angular's $scope
spaApp.controller('aboutController', function($scope,$routeParams){
	    $scope.first_name = "Jon";
		$scope.last_name = "Smith";
		$scope.changeName = function(){
			$scope.first_name = "New Jon";
		    $scope.last_name = "Mew Smith";
		}
	});
spaApp.controller('contactController', function($scope,$routeParams){
	    
	});	
	
	

