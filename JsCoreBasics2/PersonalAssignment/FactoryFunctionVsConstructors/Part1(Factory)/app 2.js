// Factory functions 
//the idea behind factory functions are that they are 
//functions that produce another function , or objects

const me = {
    name:'Wallie',
    talk(){
        return 'hello im ' + this.name;
    }
}
const brother = {
    name:'heshow',
    talk(){
        return 'hello im ' + this.name;
    }
}

console.log(me.talk());
console.log(brother.talk());


// factory function 
//We need to isolate what is common in the factory function and pass in what is 
//different in the parameters 
//factory functions are simple 
function personFactory(name) {
    return {
        name: name,
        talk: function () {
            return 'hello im ' + name
        }
    }
}

const mefactory = personFactory('wallie')
console.log(mefactory);//{name: 'wallie', talk: ƒ}
console.log(mefactory.talk());// hello im wallie


const brotherFactory = personFactory('heshow')
console.log(brotherFactory);//{name: 'heshow', talk: ƒ}
console.log(brotherFactory.talk());//app.js:40 hello im heshow

//it gives us a layer of protection
brotherFactory.name = 'hisham';//even if we change the name in the object
// the function wont change 
//if in the talk function is concatenated this.name then 
//the new name will be passed
console.log(brotherFactory);//{name: 'hisham', talk: ƒ}
console.log(brotherFactory.talk());//hello im heshow