var app = angular.module("myApp", ["ngMaterial","jkAngularCarousel"]);
app.controller("myController", function($scope){
	$scope.arrayData = [
		{src: "1.jpg"},
		{src: "2.jpg"},
		{src: "3.jpg"},
		{src: "4.jpg"},
		{src: "5.jpg"}
	]
});
app.run(function (){
	console.log("THis is running");
});
