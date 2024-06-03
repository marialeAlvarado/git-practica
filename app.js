const colors = require('colors');
const { calculadora, ejemplo } = require("./clase/calculadora")

console.log("Hola desde app <3:", ejemplo)

let cal = new calculadora();

cal.suma(5,5)
console.log("suma:".rainbow, cal.suma(5,5))

console.log("resta:", cal.resta(2,1))

console.log("multiplicacion:", cal.multiplicacion(2,5))

console.log("division:", cal.division(6,2))