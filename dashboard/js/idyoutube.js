function getVideoID() {
    var videoInput = document.getElementById("video-input");
    var videoURL = videoInput.value;

    // استخراج معرف الفيديو من الرابط
    var videoID = "";
    if (videoURL.includes("youtube.com/watch?v=")) {
      videoID = videoURL.split("watch?v=")[1];
      if (videoID.includes("&")) {
        videoID = videoID.split("&")[0];
      }
    } else if (videoURL.includes("youtu.be/")) {
      videoID = videoURL.split("youtu.be/")[1];
      if (videoID.includes("?")) {
        videoID = videoID.split("?")[0];
      }
    }

    if (videoID) {
      document.getElementById("video-id").innerHTML = "Video ID: " + videoID;
    } else {
      document.getElementById("video-id").innerHTML = "ادخل رابط يوتيوب صحيح من فضلك !";
    }
  }