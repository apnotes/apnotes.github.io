var app = angular.module("myApp", ["ngMaterial","jkAngularCarousel"]);
app.controller("myController", function($scope){
	$scope.arrayData = [
		{src: "img/1.jpg"},
		{src: "img/2.jpg"},
		{src: "img/3.jpg"},
		{src: "img/4.jpg"},
		{src: "img/5.jpg"}
	]
});
app.run(function (){
	console.log("THis is running");
});
