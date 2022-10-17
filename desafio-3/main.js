

const elementNumberUno = document.querySelector ("#numberUno")
const elementNumberDos = document.querySelector ("#numberDos")
const elementNumberTres = document.querySelector ("#numberTres")
const elementBoton = document.querySelector ("#boton")
const elementMensaje = document.querySelector ("#mensaje")


elementBoton.addEventListener ("click", () => {

console.log("me diste click" )

 
    if (elementNumberUno.selectedIndex === 8 && elementNumberDos.selectedIndex === 0 && elementNumberTres.selectedIndex === 0) {
        elementMensaje.textContent = "Password 1 correcto!!"
        return
    }

    if (elementNumberUno.selectedIndex === 6 && elementNumberDos .selectedIndex === 0 && elementNumberTres.selectedIndex === 3) {
        elementMensaje.textContent = "Password 2 correcto!!"
        return
    }

    else (
        elementMensaje.textContent = "Password incorrecto..."
    )

   })