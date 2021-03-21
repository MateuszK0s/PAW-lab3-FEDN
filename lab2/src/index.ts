let hihatSound: HTMLAudioElement;
let clapSound: HTMLAudioElement;
let kickSound: HTMLAudioElement;
let openhatSound: HTMLAudioElement;
let rideSound: HTMLAudioElement;
let snareSound: HTMLAudioElement;
let tinkSound: HTMLAudioElement;
let boomSound: HTMLAudioElement;
let tomSound: HTMLAudioElement;

const channel1: any[] = [];

appStart();

function appStart(): void{
    document.body.addEventListener('keypress', onKeyDown);     
    const btnChannel1Play = document.querySelector('#btnChannel1');
    btnChannel1Play?.addEventListener('click', onPlayChannel1);   
    getSounds();
}

function getSounds(): void {
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

function onPlayChannel1(): void{
    let prevTime = 0;
    channel1.forEach(sound => {
        const timeout = sound.time - prevTime;
        setTimeout(() => playSound(sound.key), timeout);
    });
}

function onKeyDown(ev: KeyboardEvent): void{
    console.log(ev)
    const key = ev.key;
    const time = ev.timeStamp;
    channel1.push([key, time]);
    playSound(key);   
    console.log(
        channel1
    );
}

function playSound(key: string): void{
    switch(key){
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

