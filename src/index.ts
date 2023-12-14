// Import readline
import * as readlineSync from 'readline-sync';
// Function calcArea 1
function calcArea(base: number, height: number): number {
    return base * height;
}
// Vars & inputs
const base = parseFloat(readlineSync.question('Enter the base: '));
const height = parseFloat(readlineSync.question('Enter the height: '));
// Output Function calcArea 1
console.log('Method Calc 1: ' + calcArea(base, height))
console.log('--------------------------------------')

// < = --- DIV --- = >

// Function calcArea 2 (reuse previous inputs)
const calcArea2 = (base: number, height: number): number => base * height
// Output Function calcArea 2
console.log('Method Calc 2: ' + calcArea2(base, height))
console.log('--------------------------------------')

// < = --- DIV --- = >

// Function Hello World (concat)
const name: String = (readlineSync.question('Enter yout name: '));
console.log(`Concat method 1: Hello World, ${name} !`)
console.log(`Concat method 2: Hello World, ` + name + ' !')