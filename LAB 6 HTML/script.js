let now_playing = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');
let track_art = document.querySelector('.track-art');
let playpause_btn = document.querySelector('.playpause-track');
let track_list_div = document.querySelector('.track-list');

let curr_track = document.createElement('audio');
let track_index = 0;
let isPlaying = false;
const music_list = [
    { img: 'images/stay.png', name: 'Stay', artist: 'Justin Bieber', music: 'music/stay.mp3' },
    { img: 'images/fallingdown.jpg', name: 'Falling Down', artist: 'Wid Cards', music: 'music/fallingdown.mp3' },
    { img: 'images/faded.png', name: 'Faded', artist: 'Alan Walker', music: 'music/Faded.mp3' },
    { img: 'images/ratherbe.jpg', name: 'Rather Be', artist: 'Clean Bandit', music: 'music/Rather Be.mp3' }
];

music_list.forEach((track, index) => {
    let track_div = document.createElement('div');
    track_div.classList.add('track-item');
    track_div.textContent = track.name + " - " + track.artist;
    track_div.onclick = function() { loadTrack(index); };
    track_list_div.appendChild(track_div);
});

function loadTrack(index) {
    curr_track.src = music_list[index].music;
    curr_track.load();
    track_art.style.backgroundImage = "url(" + music_list[index].img + ")";
    now_playing.textContent = music_list[index].name;
    track_artist.textContent = music_list[index].artist;
    playpauseTrack();
}

function playpauseTrack() {
    if (isPlaying) {
        curr_track.pause();
        isPlaying = false;
        playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
    } else {
        curr_track.play();
        isPlaying = true;
        playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
    }
}

function nextTrack() {
    if (track_index < music_list.length - 1) {
        track_index++;
    } else {
        track_index = 0;
    }
    loadTrack(track_index);
}

function prevTrack() {
    if (track_index > 0) {
        track_index--;
    } else {
        track_index = music_list.length - 1;
    }
    loadTrack(track_index);
}

loadTrack(track_index);
