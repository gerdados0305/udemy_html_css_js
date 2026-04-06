const botones = document.querySelectorAll("button")

const campoEntrada = document.getElementById("resultado")

for(let i = 0 ; i < botones.length ; i++){
    botones[i].addEventListener("click" , () => {

        const valorBoton = botones[i].textContent

        if(valorBoton === "C"){
            borrarDatos()
        }else if(valorBoton === "="){
            operar()
        }else{
            añadirDatos(valorBoton)
        }
            
    })

    function borrarDatos(){
    campoEntrada.value= ""
    }

    function operar(){
        campoEntrada.value = eval(campoEntrada.value)
    }

    function añadirDatos(valorBoton){
        campoEntrada.value += valorBoton
    }
}

