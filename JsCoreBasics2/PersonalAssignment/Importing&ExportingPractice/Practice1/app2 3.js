const word = 'Wallie';
const array1 = [1,2,3,4,5];

 class Hero{
    constructor(n, a, sp){
        this.name = n
        this.alius= a
        this.superPower = sp
    }

    whoAmI(){
        return `hey im ${this.name} and im ${this.alius}, my super power is ${this.superPower}`
    }
}

export{
    Hero, word, array1
}
