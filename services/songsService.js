angular
  .module("mySongApp")
  .service("songsService", function ($http) {

    var songId = 0;
    var _songs = [];

    function Song(id, title, artist, album, duration, genre, mood) {
      this.id = id;
      this.title = title;
      this.artist = artist;
      this.album = album;
      this.duration = duration;
      this.genre = genre;
      this.mood = mood;
    }
    
    _songs.push(new Song(songId++, "Shape of You", "Ed Sheeran", " ÷ ", "3:53", ["pop", "dance", "house"], ["bouncy", "energetic"]))
    _songs.push(new Song(songId++, "Uptown Funk", "Mark Ronson and Bruno Mars", "Uptown Special", "4:30", ["funk", "dance", "party"], ["joyful", "energetic"]))
    _songs.push(new Song(songId++, "Beat It", "Michael Jackson", "Thriller", "4:18", ["dance", "pop"], ["energetic", "bouncy"]))
    _songs.push(new Song(songId++, "Single Ladies (Put a Ring on It)", " Beyoncé", "I Am... Sasha Fierce", "3:13", ["R&B", "dance"], ["energetic", "strong"]))
    _songs.push(new Song(songId++, "Halo", " Beyoncé", "I Am... Sasha Fierce", "4:22", ["pop", "R&B"], ["strong", "joyful"]))
    _songs.push(new Song(songId++, "No Diggity", "Blackstreet, Dr Dre and Queen Pen", "Another Level", "5:03", ["R&B", "hip-hop"], ["easy", "strong"]))
    _songs.push(new Song(songId++, "You Can Call Me Al", "Paul Simon", "Graceland", "4:40", ["pop rock", "world"], ["easy", "bouncy"]))
    _songs.push(new Song(songId++, "Gold Digger", "Kanye West", "Late Registration", "3.28", ["hip-hop", "R&B", "rap"], ["strong", "energetic"]))
    _songs.push(new Song(songId++, "Let’s Dance", "David Bowie", "Let's Dance", "4:08", ["dance", "rock", "electronic"], ["joyful", "energetic", "bouncy"]))
    _songs.push(new Song(songId++, "Hey Ya", "Outkast", "Speakerboxxx/The Love Below", "3:55", ["pop", "hip-hop", "rap"], ["joyful", "energetic", "bouncy"]))
    _songs.push(new Song(songId++, "Everywhere", "Fleetwood Mac", "Tango In The Night", "3:43", ["rock", "blues"], ["romantic", "joyful", "easy"]))
    _songs.push(new Song(songId++, "I Wanna Dance With Somebody", "Whitney Houston", "Whitney", "4:50", ["dance", "R&B"], ["joyful", "bouncy", "energetic"]))
    _songs.push(new Song(songId++, "Brown-Eyed Girl", "Van Morrison", "Blowin' Your Mind", "3:03", ["classic", "rock", "blues"], ["romantic", "joyful", "easy", "mysterious"]))
    _songs.push(new Song(songId++, "Blue Monday", "New Order", "single", "7:29", ["alternative", "electronic", "dance"], ["mysterious", "energetic"]))
    _songs.push(new Song(songId++, "September", "Earth, Wind, and Fire", "The Eternal Dance", "3:34", ["disco", "R&B", "funk"], ["energetic", "bouncy"]))
    _songs.push(new Song(songId++, "Don't Stop Believing", "Journey", "Escape", "4:08", ["classic", "rock", "pop"], ["strong", "joyful"]))
    _songs.push(new Song(songId++, "All Star", "Smashmouth", "Astro Lounge", "3:20", ["alternative", "pop", "rock"], ["strong", "joyful"]))
    _songs.push(new Song(songId++, "Stand By Me", "Ben E. King", "Don't Play That Song", "3:00", ["soul", "blues"], ["easy", "joyful"]))
    _songs.push(new Song(songId++, "Hey, Soul Sister", "Train", "Hey, Soul Sister", "3:36", ["rock", "pop", "easy"], ""))
    _songs.push(new Song(songId++, "Don't Stop Me Now", "Queen", "Jazz", "3:29", ["rock"], ["joyful", "bouncy", "strong"]))
    _songs.push(new Song(songId++, "Walking On Sunshine", "Katrina and the Waves", "Katrina and the Waves", "3:58", ["pop", "rock"], ["bouncy", "energetic", "strong"]))
    _songs.push(new Song(songId++, "Mr. Brightside", "The Killers", "Hot Fuss", "3:42", ["alternative", "new wave", "electronic"], ["romantic", "energetic"]))
    _songs.push(new Song(songId++, "Stayin' Alive", "Bee Gees", "Timeless-The All-Time Greatest Hits", "4:44", ["disco"], ["bouncy", "energetic", "joyful"]))
    _songs.push(new Song(songId++, "Rehab", "Amy Winehouse", "Back to Black", "3:33", ["soul", "blues"], ["strong", "mysterious"]))
    _songs.push(new Song(songId++, "December, 1963 (Oh, What A Night!)", "Frankie Vali & The Four Seasons", "The Very Best Of Frankie Vali & the 4 Seasons", "3;21", ["rock", "disco"], ["mysterious", "calm", "romantic"]))
    _songs.push(new Song(songId++, "I've Had the Time Of My Life", "Bill Medley, Jennifer Warnes", "Dirty Dancing", "4:47", ["soft rock", "contemporary"], ["romantic", "bouncy"]))
    _songs.push(new Song(songId++, "Happy Together", "The Turtles", "Happy Together", "2:56", ["pop", "rock"], ["easy", "romantic", "joyful"]))
    _songs.push(new Song(songId++, "Boom Clap", "Charli XCX", "Boom Clap", "2:49", ["pop", "dance"], ["bouncy", "joyful"]))
    _songs.push(new Song(songId++, "The Plains Of Dover", "Ceilidh", "The Plains of Dover", "3:11", ["folk", "world"], ["calm", "focused", "mysterious"]))
    _songs.push(new Song(songId++, "Something in the Way She Moves", "James Taylor", "James Taylor", "2:54", ["soft rock", "folk"], ["joyful", "romantic", "calm"]))
    _songs.push(new Song(songId++, "Peer Gynt Suite No. 1, Op. 46: Morning Mood", "London Philharmonic Orchestra", "The 50 Greatest Pieces of Classical Music", "3:44", ["classical", "instrumental"], ["calm", "romantic", "joyful", "focused"]))
    _songs.push(new Song(songId++, "Turandot: Nessun dorma", "Giacomo Puccini, Luciano Pavarotti, John Alldis Choir", "The 50 Greatest Vocal Hits", "3:00", ["classical", "opera"], ["calm", "romantic", "mysterious"]))
    _songs.push(new Song(songId++, "Thais: Meditation", "London Philharmonic Orchestra, Peter Schoeman", "The 50 Greatest Pieces of Classical Music", "5:01", ["classical", "instrumental"], ["focused", "calm"]))
    _songs.push(new Song(songId++, "Tosca, Act 3: 'E lucevan le stelle'", "Giacomo Puccini", "The 50 Greatest Opera Arias", "6:49", ["classical", "opera"], ["mysterious", "calm", "focused"]))
    _songs.push(new Song(songId++, "Rigoletto, Act III: La donna e mobile", "Giuseppe Verdi, Alfredo Kraus, Julius Rudel, Philharmonia Orchestra", "The 50 Greatest Opera Hits", "2:18", ["classical", "opera"], ["calm", "focused", "easy"]))
    _songs.push(new Song(songId++, "Lucia di Lammermoor: Act 3 'Il dolce suono' (Mad Scene)", "Gaetano Donizetti, New Philharmonia Orchestra", "The 50 Greatest Opera Arias", "6:49", ["classical", "opera"], ["calm", "focused", "easy"]))
    _songs.push(new Song(songId++, "Le nozze de Figaro (The Marriage of Figaro ", "W A Mozart, Jessye Norman, BBC Symphony Orchestra", "The 50 Greatest Opera Hits", "3:57", ["classical", "opera"], ["joyful", "mysterious", "romantic"]))
    _songs.push(new Song(songId++, "Swan Lake Suite, Op. 20: Scene", "Pyotr Ilyich Tchaikovsky", " London Philharmonic Orchestra", "3:31", ["classical", "instrumental"], ["calm", "focused"]))
    _songs.push(new Song(songId++, "Claire de Lune", "Claude Debussy", " Stephen Malinowski", "5:08", ["classical", "instrumental"], ["calm", "romantic", "mysterious", "easy", "focused"]))
    _songs.push(new Song(songId++, "Something Just Like This", "Chainsmokers, Coldplay", "Memories: Do Not Open", "4:07", ["dance", "electronic"], ["romantic", "bouncy"]))
    _songs.push(new Song(songId++, "Stay", "Zedd & Alessia Cara", " single", "3:30", ["electronic", "dance"], ["romantic", "mysterious", "easy"]))
    _songs.push(new Song(songId++, "It Ain't Me", "Kygo x Selena Gomez", "single", "3:40", ["electronic", "soul"], ["mysterious", "romantic"]))
    
    this.getSongs = function () {
      return _songs
    }
  })