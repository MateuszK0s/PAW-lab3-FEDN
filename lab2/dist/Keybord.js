"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Keyboard = /** @class */ (function () {
    function Keyboard() {
        this.audio = {};
        this.key = null;
    }
    Keyboard.prototype.load = function () {
        var keySounds = ["tink", "kick", "clap", "boom", "ride", "hihat", "openhat", "tom", "snare"];
        var audio = {};
        keySounds.forEach(function (keySound) {
            var sound = document.querySelector("[data-sound=\"" + keySound + "\"]");
            if (sound != null) {
                audio[keySound] = sound;
            }
        });
        this.audio = audio;
    };
    Keyboard.prototype.play = function () {
        if (this.key != null && (this.key in this.audio)) {
            var a = this.audio[this.key];
            a.currentTime = 0;
            a.play();
        }
    };
    Keyboard.prototype.setKey = function (key) {
        this.key = key;
    };
    return Keyboard;
}());
exports.default = Keyboard;
