let boton = document.querySelector("#verificar")

boton.addEventListener("click", () => {
    let num1 = parseInt(document.querySelector(".num1").value)
    let num2 = parseInt(document.querySelector(".num2").value)
    let num3 = parseInt(document.querySelector(".num3").value)

    let suma = num1 + num2 + num3

    if(suma <= 10){
        document.querySelector("#parrafo").innerHTML = "Llevas " + suma + " stickers."
    }

    else{
        document.querySelector("#parrafo").innerHTML = "Llevas demasiados stickers."
    }

})

