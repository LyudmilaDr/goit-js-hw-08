
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const KEY_LOCAL = "videoplayer-current-time";
console.log(Player);
player.on('timeupdate', throttle(onTimeUpdate,1000));

function onTimeUpdate(event){
    localStorage.setItem(KEY_LOCAL, JSON.stringify(event.seconds));
}
const timelyUpdate = JSON.parse(localStorage.getItem(KEY_LOCAL));

if(timelyUpdate){
    player.setCurrentTime(timelyUpdate || 0.1).then(function(seconds) {
        console.log(seconds); 
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                break;
    
            default:
                break;
        }
    }); 
    // console.log(KEY_LOCAL)  
}

