import RecordingState from "./interfaces/RecordingState";

class Recorder {
    private _recordingState: RecordingState = RecordingState.DISABLED;
    private _beggining: number = 0;
    private _channel: any = [];

    push(key: string, time: number): void {
        if (this.recordingState == RecordingState.ENABLED) {
            this._channel.push({ key, time });
        }
    }

    getChannel() {
        return this._channel;
    }

    clearChannel(): void {
        this._channel = [];
    }

    public set beggining(beggining: number) {
        this._beggining = beggining;
    }

    public get beggining() {
        return this._beggining;
    }

    public set recordingState(recordingState: RecordingState) {
        this._recordingState = recordingState;
    }

    public get recordingState() {
        return this._recordingState;
    }
}

export default Recorder;