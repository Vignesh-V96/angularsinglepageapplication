var app = angular.module("myApp", ["ngRoute"]);

app.controller("myCtrl", function($scope){
     $scope.myShow = false;
  $scope.myClick = function() {
    $scope.myShow =!$scope.myShow ;}
})
app.config(function ($routeProvider, $locationProvider) { 
        $locationProvider.hashPrefix(''); 
        $routeProvider
            .when("/", {
                templateUrl: "template/home.html"
            })
            .when("/about", {
                templateUrl: "template/about.html"
            })
            .when("/contact", {
                templateUrl: "template/contact.html"
            })
    });