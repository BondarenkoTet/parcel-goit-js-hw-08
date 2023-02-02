import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_LOCALSTORAGE =  "videoplayer-current-time";

    player.on('timeupdate', throttle(onPlay, 1000));

    function onPlay(data) {
        localStorage.setItem(KEY_LOCALSTORAGE, data.seconds);
    };
    
function updatePlayer() {
    const time = localStorage.getItem(KEY_LOCALSTORAGE);
        if (time) { player.setCurrentTime(time)};
};
    updatePlayer();

