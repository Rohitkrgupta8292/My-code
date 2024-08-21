// let obj = {
//     a:2,
//     b:'harry'
// };
// console.log(obj);

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal; // set rabbit.[[Prototype]] = animal.
// console.log(rabbit.eats)

class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created...")
    }

    eats(){
        console.log("I am eating.")
    }

    jumps(){
        console.log('I am jumping.')
        
    }
}

class Lion extends Animal{
    constructor(name){
        super(name)  // calling the parent class constructor
        console.log('I am eating and I am a Lion.')
    }
}

let a = new Animal('bunny');
console.log(a);
console.log(a.eats);
console.log(a.jumps);
console.log(a.name);

let l = new Lion('shera');
console.log(l);
