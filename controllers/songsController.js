angular
  .module("mySongApp")
  .controller("songsController", function ($scope, songsService) {
    $scope.songs = songsService.getSongs();
    console.log($scope.songs);
    $scope.title = "";
    $scope.artist = "";
    $scope.album = "";
    $scope.duration = "";
    $scope.genre = "";
    $scope.mood = "";
  })