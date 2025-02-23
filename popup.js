document.getElementById("uploadBtn").addEventListener("click", async () => {
    let fileInput = document.getElementById("subtitleFile");
    if (!fileInput.files.length) {
        alert("Please select a subtitle file.");
        return;
    }

    let file = fileInput.files[0];
    let blobURL = URL.createObjectURL(file);

    // Store the subtitle URL in Chrome storage
    await chrome.storage.local.set({ subtitleURL: blobURL });

    alert("Subtitles loaded! Refresh the video page.");
});

let video = document.querySelector("video");
if (!video) {
    alert("No video element found.");
}
