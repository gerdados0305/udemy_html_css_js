const contenedor = document.querySelector(".contenedor");
const boton = document.querySelector(".envoltura-formulario-izquierda button");
boton.addEventListener("click" , () => {
    contenedor.classList.toggle("switch");
});

