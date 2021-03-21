var Main = /** @class */ (function () {
    function Main() {
        this.startApp();
    }
    Main.prototype.startApp = function () {
        this.getInputs();
        this.watchInputValues();
    };
    Main.prototype.getInputs = function () {
        this.l1Input = document.querySelector('#l1');
        this.l2Input = document.querySelector('#l2');
        this.l3Input = document.querySelector('#l3');
        this.l4Input = document.querySelector('#l4');
        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    };
    Main.prototype.watchInputValues = function () {
        var _this = this;
        this.l1Input.addEventListener('input', function () { return _this.computeData(); });
        this.l2Input.addEventListener('input', function () { return _this.computeData(); });
        this.l3Input.addEventListener('input', function () { return _this.computeData(); });
        this.l4Input.addEventListener('input', function () { return _this.computeData(); });
    };
    Main.prototype.computeData = function () {
        var l1 = +this.l1Input.value;
        var l2 = +this.l1Input.value;
        var l3 = +this.l1Input.value;
        var l4 = +this.l1Input.value;
        var sum = l1 + l2 + l3 + l4;
        var avg = sum / 4;
        var min = Math.min(l1, l2, l3, l4);
        var max = Math.max(l1, l2, l3, l4);
        this.showStats(sum, avg, min, max);
    };
    Main.prototype.showStats = function (sum, avg, min, max) {
        this.sumInput.value = sum.toString();
        this.avgInput.value = avg.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    };
    return Main;
}());
new Main();
