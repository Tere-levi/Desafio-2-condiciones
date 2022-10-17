
const elementCantidadUno = document.querySelector ("#cantidadUno")
const elementCantidadDos = document.querySelector ("#cantidadDos")
const elementCantidadTres = document.querySelector ("#cantidadTres")
const elementVerificar = document.querySelector ("#verificar")
const elementMensaje = document.querySelector ("#mensaje")




elementVerificar.addEventListener ("click", ()=> {
const elementSuma = parseInt(elementCantidadUno.value) + parseInt(elementCantidadDos.value) + parseInt(elementCantidadTres.value)
console.log(elementSuma)

if (elementSuma <= 10) {
  
    elementMensaje.textContent= `LLevas ${elementSuma} Stickers !!`
    
}

else {
    elementMensaje.textContent= `LLevas ${elementSuma}, muchos Stickers !!`
    
}







})