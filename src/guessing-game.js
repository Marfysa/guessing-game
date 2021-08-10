class GuessingGame {
    constructor() {
        this.min;
        this.max;
        this.guess_num;
     }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }
   
    guess() {
        this.guess_num = Math.round((this.max + this.min) / 2);
        return this.guess_num;
    }     
        
    

    lower() {
        this.max = this.guess_num;
    }

    greater() {
        this.min = this.guess_num;
    }
}

module.exports = GuessingGame;
