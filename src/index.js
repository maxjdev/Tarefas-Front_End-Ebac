"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import readline
const readlineSync = __importStar(require("readline-sync"));
// Function calcArea 1
function calcArea(base, height) {
    return base * height;
}
// Vars & inputs
const base = parseFloat(readlineSync.question('Enter the base: '));
const height = parseFloat(readlineSync.question('Enter the height: '));
// Output Function calcArea 1
console.log('Method Calc 1: ' + calcArea(base, height));
console.log('--------------------------------------');
// < = --- DIV --- = >
// Function calcArea 2 (reuse previous inputs)
const calcArea2 = (base, height) => base * height;
// Output Function calcArea 2
console.log('Method Calc 2: ' + calcArea2(base, height));
console.log('--------------------------------------');
// < = --- DIV --- = >
// Function Hello World
const name = (readlineSync.question('Enter yout name: '));
console.log(`Concat method 1: Hello World, ${name}!`);
console.log(`Concat method 2: Hello World, ` + name);
