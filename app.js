const video = document.querySelector("video");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");

function streamVideo() {
    const options = { video : true };
    navigator.mediaDevices.getUserMedia(options)
    .then( streamObj => {
        stream = streamObj;
        video.srcObject = stream;
        startBtn.disabled = true;
        stopBtn.disabled = false;
    })
    .catch( err => console.log(err));
}

function stopVideo() {
    if (stream) {
        stream.getTracks().forEach(function(track) {
            track.stop();
        });
        video.srcObject = null;
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
}