class Main{
    l1Input: HTMLInputElement;
    l2Input: HTMLInputElement;
    l3Input: HTMLInputElement;
    l4Input: HTMLInputElement;
    sumInput: HTMLInputElement;
    avgInput: HTMLInputElement;
    minInput: HTMLInputElement;
    maxInput: HTMLInputElement;
    constructor(){
        this.startApp();
    }
    startApp(){
        this.getInputs();
        this.watchInputValues();
    }
    getInputs(){
        this.l1Input = document.querySelector('#l1');
        this.l2Input = document.querySelector('#l2');
        this.l3Input = document.querySelector('#l3');
        this.l4Input = document.querySelector('#l4');
        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    }
    watchInputValues(){
        this.l1Input.addEventListener('input', () => this.computeData());
        this.l2Input.addEventListener('input', () => this.computeData());
        this.l3Input.addEventListener('input', () => this.computeData());
        this.l4Input.addEventListener('input', () => this.computeData());
    }
    computeData(){
        const l1 = +this.l1Input.value;
        const l2 = +this.l1Input.value;
        const l3 = +this.l1Input.value;
        const l4 = +this.l1Input.value;
        const sum = l1+l2+l3+l4;
        const avg = sum/4;
        const min = Math.min(l1,l2,l3,l4);
        const max = Math.max(l1,l2,l3,l4);

        this.showStats(sum,avg,min,max);
    }

    showStats(sum: number,avg: number,min: number,max: number){
        this.sumInput.value = sum.toString();
        this.avgInput.value = avg.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    }

}

new Main();