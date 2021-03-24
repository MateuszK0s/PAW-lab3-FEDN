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
    document.addEventListener('keypress', onKeyDown);     
    const btnChannel1Play = document.querySelector('#playChannel1');
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

