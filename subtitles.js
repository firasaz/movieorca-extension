(async function () {
    // Wait for the video element to appear
    let video = document.querySelector("video");
    if (!video) {
        console.log("No video element found.");
        return;
    }

    // Create a new track element
    let track = document.createElement("track");
    track.kind = "subtitles";
    track.label = "Custom Subtitles";
    track.srclang = "en";
    track.default = true;

    // Load the subtitle file from local storage
    let storedSubtitle = await chrome.storage.local.get("subtitleURL");
    if (storedSubtitle.subtitleURL) {
        track.src = storedSubtitle.subtitleURL;
    } else {
        console.log("No subtitle file found.");
        return;
    }

    // Append the track to the video
    video.appendChild(track);
})();
