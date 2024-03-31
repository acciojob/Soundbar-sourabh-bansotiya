//your JS code here. If required.

function playAudio(audioName) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = `./sounds/${audioName}`;
    audioPlayer.play();
}

function stopAudio() {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}

