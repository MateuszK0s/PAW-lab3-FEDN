import Keyboard from "./Keyboard";
import Recorder from "./Recoder";

export default class AudioPlayer 
{
    private _recorder: Recorder;
    private _keyboard: Keyboard;

    constructor(_recorder: Recorder, _keyboard: Keyboard) {
        this._recorder = _recorder;
        this._keyboard = _keyboard;
    }

    play() {
        let channel = this._recorder.getChannel();
        let beggining = this._recorder.beggining;

        let prevTime = beggining;
        channel?.forEach((step: any) => {
            if(prevTime == 0) {
                prevTime = step.time;
            }

            let timeout = step.time - prevTime;
            setTimeout(() => {
                this._keyboard.setKey(step.key);
                this._keyboard.play();
            }, timeout);
        });
    }
}