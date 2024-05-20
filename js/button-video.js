// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player("video", {
    events: {
      // call this function when player is ready to use
      onReady: onPlayerReady,
      onPause:onPauseReady,
      onStop:onStopReady,
    },
  });
}

function onPlayerReady(event) {
  // bind events
  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function () {
    player.playVideo();
  });
}
function onPauseReady(event) {
  var pauseButton = document.getElementById("pause-button");
  pauseButton.addEventListener("click", function () {
    player.pauseVideo();
  });

}
function onStopReady(event) {
  var stopButton = document.getElementById("stop-button");
  stopButton.addEventListener("click", function () {
    player.stopVideo();
  });
}

var player,
  seconds = 0;
function onYouTubeIframeAPIReady() {
  
  console.log("player");
  player = new YT.Player("player", {
    events: {
      onReady: onPlayerReady,
      onPause:onPauseReady,
      onStop:onStopReady,
    },
  });
}

function seek(sec) {
  if (player) {
    seconds += sec;
    player.seekTo(seconds, true);
  }
}
// Inject YouTube API script
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
