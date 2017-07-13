angular
  .module("mySongApp")
  .service("userService", function () {

    var _user = null;
    var User = function (mood, genre) {
      this.mood = mood;
      this.genre = genre;
      this.playlist = [];
    }

    this.setCurrentUser = function (mood, genre) {
      _user = new User(mood, genre)
      console.log(_user);
    }

    this.getCurrentUser = function () {
      return _user;
    }
  })