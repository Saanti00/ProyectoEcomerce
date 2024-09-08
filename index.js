//lista de hoodies//
const productos = [
   {nombre: "Buzo blanco moon", precio: 14999},
   {nombre: "Buzo negro moon", precio: 14999},
   {nombre: "Buzo butterfly gris", precio: 14999},
   {nombre: "Buzo naranja interlude", precio: 14999},
   {nombre: "Buzo butterfly blanco", precio: 14999},
]

const carrito = []
  //variable para asignar producto cantidad y precio//

const agregarCarrito = (producto, cantidad)=>{
    const elementoCarrito = {
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: cantidad
    }
    carrito.push(elementoCarrito)
}
//total ciclo//
const totalCarrito = ()=>{
    let total = 0
    console.log(carrito)
    for(let i=0; i<carrito.length; i++){
      total += carrito[i].precio * carrito[i].cantidad   
    } 
    return total
  }
//saludo e interacción con ciclo condicional//

let edad = prompt("¿Que edad tienes?")
    if(edad >= 18) {
        alert("Bienvenido a Hoodies HG")
    }else {
   alert("Por favor adjunte una foto de su DNI antes de realizar la compra")
   }
   
//suma de hoodies al carrito//
const app = ()=>{
    let loop = true
    while(loop){
      let producto = prompt("Por favor seleccione que buzo desea agregar al carrito: \n 0- Buzo blanco moon $14999 \n 1- Buzo negro moon $14999 \n 2- Buzo naranja interlude $14999 \n 3- Buzo butterfly gris $14999 \n 4- Buzo butterfly blanco $14999")
      let cantidad = parseInt(prompt('Indique cantidad'))
      agregarCarrito(productos[producto], cantidad)
      loop = confirm("¿Desea continuar con su compra?")
    }
    alert("Su total es $" + totalCarrito() +  " a continuación finalizaremos su compra")
  }

app()

//function para realizar descuento// 

function descontar (num1,num2) {
let resultado;
resultado = num1-num2
return resultado
}

let aplicarDescuento = descontar (14999,2249.85)
console.log("el resultado es: " + aplicarDescuento)
alert(" Aplicamos su descuento del 10% Gracias por elegirnos.")
 

