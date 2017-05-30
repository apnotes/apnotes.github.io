var app = angular.module("myApp", ["ngMaterial"]);
app.controller("myController", function($scope){
	$scope.arrayData = [
		{src: "https://www.cleverfiles.com/howto/wp-content/uploads/2016/08/mini.jpg"},
		{src: "https://jpeg.org/images/jpeg-home.jpg"},
		{src: "https://jpeg.org/images/jpeg2000-home.jpg"},
		{src: "http://matthewebel.com/wp-content/uploads/2013/06/wpid-the-long-road1.jpeg"},
		{src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Cumulus_clouds_in_fair_weather.jpeg"}
	];
});
app.run(function (){
	console.log("THis is running");
});
