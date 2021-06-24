import RecordingState from "./interfaces/RecordingState";

class Recorder {
    private _recordingState: RecordingState = RecordingState.DISABLED;
    private _beggining: number = 0;
    private _channel: any = [];

    push(key: string, time: number): void {
        if (this.state == RecordingState.ENABLED) {
            this._channel.push({ key, time });
        }
    }

    getChannel() {
        return this._channel;
    }

    clearChannel(): void {
        this._channel = [];
    }

    public set startAt(startAt: number) {
        this._beggining = startAt;
    }

    public get startAt() {
        return this._beggining;
    }

    public set state(state: RecordingState) {
        this._recordingState = state;
    }

    public get state() {
        return this._recordingState;
    }
}

export default Recorder;