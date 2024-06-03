const { calculadora, ejemplo } = require("./clase/calculadora")

console.log("Hola desde app <3:", ejemplo)

let cal = new calculadora();

cal.suma(5,5)
console.log("suma:", cal.suma(5,5))