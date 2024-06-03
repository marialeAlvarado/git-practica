let hola="Hola a todos";
class calculadora {

    constructor(){
        console.log("Hola desde calculadora constructor")

    }

    suma = (a, b) => {


        return a+b
    }

}

module.exports={
    calculadora,
    ejemplo:hola
}