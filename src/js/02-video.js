import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

const onPlay = time => localStorage.setItem("videoplayer-current-time", time.seconds);
const currentTime = localStorage.getItem("videoplayer-current-time");

(currentTime) ? player.setCurrentTime(currentTime) : null;

player.on('timeupdate', throttle(onPlay, 1000));

player.off('timeupdate');
