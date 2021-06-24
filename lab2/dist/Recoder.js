"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var RecordingState_1 = __importDefault(require("./interfaces/RecordingState"));
var Recorder = /** @class */ (function () {
    function Recorder() {
        this._recordingState = RecordingState_1.default.DISABLED;
        this._beggining = 0;
        this._channel = [];
    }
    Recorder.prototype.push = function (key, time) {
        if (this.state == RecordingState_1.default.ENABLED) {
            this._channel.push({ key: key, time: time });
        }
    };
    Recorder.prototype.getChannel = function () {
        return this._channel;
    };
    Recorder.prototype.clearChannel = function () {
        this._channel = [];
    };
    Object.defineProperty(Recorder.prototype, "startAt", {
        get: function () {
            return this._beggining;
        },
        set: function (startAt) {
            this._beggining = startAt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Recorder.prototype, "state", {
        get: function () {
            return this._recordingState;
        },
        set: function (state) {
            this._recordingState = state;
        },
        enumerable: false,
        configurable: true
    });
    return Recorder;
}());
exports.default = Recorder;
