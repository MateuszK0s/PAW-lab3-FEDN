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
    document.addEventListener('keypress', onKeyDown);
    var btnChannel1Play = document.querySelector('.playChannel1');
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
    var key = ev.key;
    var time = ev.timeStamp;
    channel1.push([key, time]);
    playSound(key);
    console.log(channel1);
}
function playSound(key) {
    switch (key) {
        case '1':
            hihatSound.currentTime = 0;
            hihatSound.play();
            break;
        case '2':
            clapSound.currentTime = 0;
            clapSound.play();
            break;
        case '3':
            boomSound.currentTime = 0;
            boomSound.play();
            break;
        case '4':
            kickSound.currentTime = 0;
            kickSound.play();
            break;
        case '5':
            tomSound.currentTime = 0;
            tomSound.play();
            break;
        case '6':
            tinkSound.currentTime = 0;
            tinkSound.play();
            break;
        case '7':
            rideSound.currentTime = 0;
            rideSound.play();
            break;
        case '8':
            openhatSound.currentTime = 0;
            openhatSound.play();
            break;
        case '9':
            snareSound.currentTime = 0;
            snareSound.play();
            break;
    }
}
