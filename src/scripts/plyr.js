import Plyr from 'plyr';

var players = [];
document.querySelectorAll('#player').forEach((el) => {
    console.log('Adding player:', el);
    var player = new Plyr(el);
    players.push(player);
});

var player = players[0];
player.muted = true;
player.loop = true;
player.autoplay = true;
player.play();