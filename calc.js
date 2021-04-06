// let calculator = {
//     // // ... your code
//     // calculator.read(); //prompts for 2 values and saved them as objects
//     // calculator.read(Object1(), Object2());

//     // alert(calculator.sun());//returns the sum of the 2 values
//     // alert(calculator(Object1).sun(Object2)) = Object3(){
//     //     return Object3();
//     // }

//     // alert(calculator.mul()); //returns the product of the 2 values
//     // alert(calculator(Object1).mul(Object2)) = Object3(){
//     //     return Object3();
//     // }

//     sum() {
//         return this.a + this.b;
//     },

//     mul() {
//         return this.a * this.b;
//     },

//     read(){
//         this.a = +prompt('a?', 0);
//         this.a = +prompt('b?', 0);
//     }
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());



let ladder = {
    up() {
        return this.step + this.step;
    },

    down() {
        return this.step - this.step;
    },

    showStep() {
        return this.step;
    }
}

ladder.read();
ladder.up();
ladder.down();
ladder.showStep();