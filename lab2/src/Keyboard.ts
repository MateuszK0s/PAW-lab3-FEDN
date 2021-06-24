import { IAudio } from "./interfaces/IKeybord";

export default class Keyboard {
    audio: IAudio = {};
    key: (string | null) = null;

    load(): void {
        let keySounds = ["tink", "kick", "clap", "boom", "ride", "hihat", "openhat", "tom", "snare"];
        let audio: IAudio = {};

        keySounds.forEach(keySound => {
            let sound: (HTMLAudioElement | null) = document.querySelector(`[data-sound="${keySound}"]`);

            if (sound != null) {
                audio[keySound] = sound;
            }
        });

        this.audio = audio;
    }

    play() {
        if (this.key != null && (this.key in this.audio)) {
            let a = this.audio[this.key];
            a.currentTime = 0;
            a.play();
        }
    }

    setKey(key: string) {
        this.key = key;
    }

}