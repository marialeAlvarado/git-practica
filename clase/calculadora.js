let hola="Hola a todos";
class calculadora {

    constructor(){
        console.log("Hola desde calculadora constructor")

    }

    suma = (a, b) => {
        return a+b
    }

    resta = (a, b) => {
        return a-b
    }

    multiplicacion = (a, b) => {
        return a*b
    }

    division = (a, b) => {
        if(b!= 0)
            return a/b
        return 0
    }

}

module.exports={
    calculadora,
    ejemplo:hola
}