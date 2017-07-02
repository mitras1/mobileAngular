// Define a new module for our app
/*var app = angular.module("instantSearch", ['ngRoute','ngResource']);
app.config(function($routeProvider) {
    $routeProvider
    .when('/list', {
        templateUrl : 'list.html'
    })
	.when("/show/:data", {
      templateUrl: "show.html"
	})
	.when("/about", {
      templateUrl: "about.html"
	})
	.when("/settings", {
      templateUrl: "settings.html"
	})
	.when("/home", {
      templateUrl: "home.html",
	  controller: "home"
	})
	.otherwise({
		redirectTo : '/list'
	});
});*/
/*
app.run(['$window', '$rootScope', 
function ($window ,  $rootScope) {
  $rootScope.goBack = function(){
	  $window.history.back();

  }
}]);
app.service('agrService', function($http) {
	this.getRequestData = function(dataUrl) {
		return $http({
			method : 'GET',
			url : dataUrl
		});
	}

});

app.factory('githubUsers', ['$resource',
    function($resource) {
      return $resource('https://api.github.com/users', {
        query: {
          method: 'GET'
        }
      });
    }
  ]);
  app.factory('githubUsersData', ['$resource',
    function($resource) {
      return $resource('https://api.github.com/users/:id', {id: "@id"},{
        query: {
          method: 'GET'
        },
		GetTodo: { method: "GET", params: { id: 0 } }
      });
    }
  ]);
// Create the instant search filter

app.filter('searchFor', function(){

	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){

			if(item.login.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});
// The controller
app.controller("InstantSearchController", function ($scope, githubUsers,$rootScope) {
	$rootScope.navigated = false;
    githubUsers.query(function(data) {
          $scope.items = data;
    });
}).
controller("ShowUserController",function($scope,$routeParams,agrService,$http,$rootScope){
	$rootScope.navigated = true;
	var url = "https://api.github.com/users/"+$routeParams.data; 
	agrService.getRequestData(url).then(function successCallback(response) {
		$scope.userdata =   response.data;
		agrService.getRequestData($scope.userdata.followers_url).then(function successCallback(response) {
			$scope.items =   response.data;
			}, function errorCallback(response) {
		});
		
		}, function errorCallback(response) {
	});

});
*/
var app = angular.module("instantSearch", []);
app.controller("InstantSearchController",function($scope){
	$scope.o = {
		a:1,
		b:2,
		c:4
	};
	$scope.$watch("o",function(newValue,oldValue){
		if(newValue!=oldValue){
			$scope.o.c = $scope.o.a *$scope.o.b;
		}
	},true);
});
/*app.directive("message",function($interpolate){
	return {
		compile: function(tElemnt,tAttributes){
			tElemnt.css("border","1px solid #f0f0f0");
			console.log("In Compile "+tAttributes.text);
			return{
				pre: function(scope,iElement,tAttributes){
					console.log("In Pre "+tAttributes.text);
				},
				post: function(scope,iElement,tAttributes){
					console.log("In Post "+tAttributes.text);
					if(tAttributes.text === "3"){
						iElement.css("border","1px solid RED");
					}
					iElement.on("click",scope.btnClick);
				}
			}
		},
		controller: function($scope,$element,$attrs){
			var v = $interpolate($attrs.text)($scope);
			console.log("controller "+v);
			$scope.btnClick = function(){
				alert(v);
			}
		}
	}
});*/
/*app.directive("message",function($interpolate){
	return {
		link:{
				pre: function(scope,iElement,tAttributes){
					console.log("In Pre "+tAttributes.text);
				},
				post: function(scope,iElement,tAttributes){
					console.log("In Post "+tAttributes.text);
					if(tAttributes.text === "3"){
						iElement.css("border","1px solid RED");
					}
					iElement.on("click",scope.btnClick);
				}
			
		},
		controller: function($scope,$element,$attrs){
			var v = $interpolate($attrs.text)($scope);
			console.log("controller "+v);
			$scope.btnClick = function(){
				alert(v);
			}
		}
	}
});*/
/*
app.directive("message",function($interpolate){
	return {
		compile: function(tElemnt,tAttributes){
			tElemnt.css("border","1px solid #f0f0f0");
			console.log("In Compile "+tAttributes.text);
				
				return function(scope,iElement,tAttributes){
					console.log("In Post "+tAttributes.text);
					if(tAttributes.text === "3"){
						iElement.css("border","1px solid RED");
					}
					iElement.on("click",scope.btnClick);
				}
			
		},
		controller: function($scope,$element,$attrs){
			var v = $interpolate($attrs.text)($scope);
			console.log("controller "+v);
			$scope.btnClick = function(){
				alert(v);
			}
		}
	}
});
*/