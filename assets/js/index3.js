let ingresar = document.querySelector("#ingresar")

ingresar.addEventListener("click", () => {
    let num1 = document.querySelector("#num1")
    let num2 = document.querySelector("#num2")
    let num3 = document.querySelector("#num3")

    let password = num1.value + num2.value + num3.value

    if(password == 911){
        document.querySelector("#respuesta").innerHTML = "Password 1 correcto"
    }

    else if(password == 714){
        document.querySelector("#respuesta").innerHTML = "Password 2 es correcto"
    }

    else{
        document.querySelector("#respuesta").innerHTML = "Password incorrecto"
    }
})