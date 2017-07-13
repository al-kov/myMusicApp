angular
  .module("mySongApp")
  .controller("userController", function ($scope, userService, songsService) {

    console.log($scope.user);
    $scope.songs = songsService.getSongs();
    console.log($scope.songs);

    $scope.user = userService.getCurrentUser();
    if ($scope.user == null) {
      $scope.user = {
        mood: "",
        genre: [],
        playlist: []
      }
    }
    var playlist = []
    for (var i = 0; i < $scope.user.genre.length; i++) {
      for (var j = 0; j < $scope.songs.length; j++) {
        if ($scope.songs[j].genre.indexOf($scope.user.genre[i]) > -1) {
          // checking if song already is in playlist
          if (playlist.indexOf($scope.songs[j]) == -1) {
            playlist.push($scope.songs[j])
          }
        }
      }
    }
    console.log(playlist)
    for (var i = 0; i < $scope.user.mood.length; i++) {
      for (var j = 0; j < $scope.songs.length; j++) {
        if ($scope.songs[j].mood) {
          if ($scope.songs[j].mood.indexOf($scope.user.mood[i]) > -1) {
            if (playlist.indexOf($scope.songs[j]) == -1) {
              playlist.push($scope.songs[j])
            }
          }
        }
      }
    }
    $scope.user.playlist = playlist
    console.log("Playlist: " + playlist)
  })
