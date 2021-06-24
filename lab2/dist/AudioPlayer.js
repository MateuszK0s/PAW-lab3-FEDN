"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AudioPlayer = /** @class */ (function () {
    function AudioPlayer(_recorder, _keyboard) {
        this._recorder = _recorder;
        this._keyboard = _keyboard;
    }
    AudioPlayer.prototype.play = function () {
        var _this = this;
        var channel = this._recorder.getChannel();
        var beggining = this._recorder.startAt;
        var prevTime = beggining;
        channel === null || channel === void 0 ? void 0 : channel.forEach(function (step) {
            if (prevTime == 0) {
                prevTime = step.time;
            }
            var timeout = step.time - prevTime;
            setTimeout(function () {
                _this._keyboard.setKey(step.key);
                _this._keyboard.play();
            }, timeout);
        });
    };
    return AudioPlayer;
}());
exports.default = AudioPlayer;
