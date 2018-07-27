/**
* Main AngularJS Web Application
*/
var app = angular.module('myApp', ['ngRoute']);

/**
* Configure the Routes
*/
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
// Home
  .when("/home", {templateUrl: "views/partials/home.html", controller: "PageCtrl"})
  .when("/", {templateUrl: "views/partials/home.html", controller: "PageCtrl"})
// Pages
  .when("/about", {templateUrl: "views/partials/about.html", controller: "PageCtrl"})
  .when("/projects", {templateUrl: "views/partials/projects.html", controller: "PageCtrl"})
  .when("/contact", {templateUrl: "views/partials/contact.html", controller: "PageCtrl"})
// else 404
  .when("/404", {templateUrl: "views/partials/404.html", controller: "PageCtrl"})
  .when("/canvasgame", {templateUrl: "CanvasGame/CanvasGame.html", controller: "PageCtrl"})
  // .when("/mapapp", {templateUrl: "MapApp/mapapp.html", controller: "PageCtrl"})
  .otherwise({
    redirectTo: '/'
  })
}]);

app.controller('PageCtrl', function ($scope, $routeParams, $route, $document, $location) {
  console.log("Page Controller reporting for duty");
  // if ($document[0].getElementsByClassName('content').length > 0) {
  //   if($document[0].getElementsByClassName('content')[0].clientHeight <= 475){
  //     angular.element('.content')[0].style = "height: 475px;"
  //   }
  // }

  $scope.getClass = function(path) {
    return ($location.path().substr(0, path.length) === path) ? 'active' : '';
  }
});
