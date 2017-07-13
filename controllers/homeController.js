angular
  .module("mySongApp")
  .controller("homeController", function ($scope, $state, userService) {

    var today = new Date().getHours();

    if (today > 12 && today < 17) {
      $scope.goodDay = "Good Afternoon!";
    }
    else if (today > 17) {
      $scope.goodDay = "Good Evening!";

    } else {
      $scope.goodDay = "Good Morning!";
    }
    
    $scope.genre = ["pop", "funk", "dance", "house", "hip-hop", "R&B", "world", "rock", "rap", "blues", "disco", "soul", "alternative", "soft rock", "contemporary", "classical", "opera", "instrumental"];
    $scope.mood = ["romantic", "joyful", "focused", "easy", "calm", "energetic", "strong", "bouncy", "mysterious"];
    $scope.genre = "";
    $scope.mood = "";
    $scope.errorMessage = false;
    $scope.getPlaylist = function () {
      if ($scope.genre == "" || $scope.mood == "") {
        $scope.errorMessage = true;
      }
      else {
        userService.setCurrentUser($scope.mood, $scope.genre)
        console.log($scope.genre)
        console.log($scope.mood)
        $state.go("user")
      }
    }

  })









