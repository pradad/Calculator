/*class carro{
    constructor(){
        this.brand = ("Volkswagen")
        this.color = ("Grey")
        this.numberDoors = ("4")
        this.shaft = ("2")
        this.hydraulic = ("auto")
        this.motor = ("2.0L")
        
    }

    turnon(){
        console.log("warming up")
        
    }

    acceleratio(){
        console.log("Running")
    }
    horn(){
        console.log("noise")
    }
}

var corvette = new carro("WV", "grey","4","2","auto","2.0L")
console.log(corvette.brand)
var _4runner = new carro("Toyota", "white","2","4","mechanic")
console.log(_4runner.brand)

let cadenaDeTexto = ("Mariano era un man muy amigo de lucas el cual se caso")
console.warn(cadenaDeTexto)

console.log(cadenaDeTexto.substring(19,cadenaDeTexto.length))
console.log(cadenaDeTexto.startsWith("Mariano",5))
console.log(cadenaDeTexto.replace("caso","divorcio"))
console.log(cadenaDeTexto.toUpperCase(cadenaDeTexto))
console.log(cadenaDeTexto.search("muy"))
console.log(cadenaDeTexto.split(" "))
console.log(cadenaDeTexto.italics(cadenaDeTexto))*/

function limpiar() {
    document.getElementById('MyForm').reset()

}

function sum() {
    var x = parseInt(document.getElementById("value1").value)
    var y = parseInt(document.getElementById("value2").value)
    alert(x + y)
}
function multiplicar() {
    var x = parseInt(document.getElementById("value1").value)
    var y = parseInt(document.getElementById("value2").value)
    alert(x * y)
}
function dividir() {
    var x = parseInt(document.getElementById("value1").value)
    var y = parseInt(document.getElementById("value2").value)
    alert(x / y)
}
function restar() {
    var x = parseInt(document.getElementById("value1").value)
    var y = parseInt(document.getElementById("value2").value)
    alert(x - y)
}


