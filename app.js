var app = angular.module("mySongApp", ["ui.router"])

app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "homeController"
    })
    .state("user", {
      url: "/user",
      templateUrl: "/views/user.html",
      controller: "userController"
    })
    .state("songs", {
      url: "/songs",
      templateUrl: "/views/songs.html",
      controller: "songsController"
    })
});