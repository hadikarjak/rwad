// https://developers.google.com/youtube/iframe_api_reference

// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player("video", {
    events: {
      // call this function when player is ready to use
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  // bind events
  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function () {
    player.playVideo();
  });

  var pauseButton = document.getElementById("pause-button");
  pauseButton.addEventListener("click", function () {
    player.pauseVideo();
  });
  var stopButton = document.getElementById("stop-button");
  stopButton.addEventListener("click", function () {
    player.stopVideo();
  });
  var muteButton = document.getElementById("mute-button");
  muteButton.addEventListener("click", function () {
    player.mute();
  });
  var unmuteButton = document.getElementById("unmute-button");
  unmuteButton.addEventListener("click", function () {
    player.unMute();
  });
}
seconds = 0;
function seek(sec) {
  if ([player]) {
    seconds += sec;
    player.seekTo(seconds, true);
  }
}

// Inject YouTube API script
var tag = document.createElement("script");
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
