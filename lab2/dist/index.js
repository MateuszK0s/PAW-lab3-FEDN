var hihatSound;
var clapSound;
var kickSound;
var openhatSound;
var rideSound;
var snareSound;
var tinkSound;
var boomSound;
var tomSound;
var channel1 = [];
appStart();
function appStart() {
    document.body.addEventListener('keypress', onKeyDown);
    var btnChannel1Play = document.querySelector('#btnChannel1');
    btnChannel1Play === null || btnChannel1Play === void 0 ? void 0 : btnChannel1Play.addEventListener('click', onPlayChannel1);
    getSounds();
}
function getSounds() {
    hihatSound = document.querySelector('[data-sound="hihat"]');
    clapSound = document.querySelector('[data-sound="clap"]');
    boomSound = document.querySelector('[data-sound="boom"]');
    kickSound = document.querySelector('[data-sound="kick"]');
    tomSound = document.querySelector('[data-sound="tom"]');
    tinkSound = document.querySelector('[data-sound="tink"]');
    rideSound = document.querySelector('[data-sound="ride"]');
    openhatSound = document.querySelector('[data-sound="openhat"]');
    snareSound = document.querySelector('[data-sound="snare"]');
}
function onPlayChannel1() {
    var prevTime = 0;
    channel1.forEach(function (sound) {
        var timeout = sound.time - prevTime;
        setTimeout(function () { return playSound(sound.key); }, timeout);
    });
}
function onKeyDown(ev) {
    console.log(ev);
    var key = ev.key;
    var time = ev.timeStamp;
    channel1.push([key, time]);
    playSound(key);
    console.log(channel1);
}
function playSound(key) {
    switch (key) {
        case 'w':
            hihatSound.currentTime = 0;
            hihatSound.play();
            break;
        case 's':
            clapSound.currentTime = 0;
            clapSound.play();
            break;
        case 'a':
            boomSound.currentTime = 0;
            boomSound.play();
            break;
        case 'd':
            kickSound.currentTime = 0;
            kickSound.play();
            break;
        case 'q':
            tomSound.currentTime = 0;
            tomSound.play();
            break;
        case 'e':
            tinkSound.currentTime = 0;
            tinkSound.play();
            break;
        case 'r':
            rideSound.currentTime = 0;
            rideSound.play();
            break;
        case 'f':
            openhatSound.currentTime = 0;
            openhatSound.play();
            break;
        case 'z':
            snareSound.currentTime = 0;
            snareSound.play();
            break;
    }
}
