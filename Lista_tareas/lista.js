const formulario = document.querySelector(".form");
const lista = document.querySelector(".list");
const campoEntrada = document.querySelector(".input");

formulario.addEventListener("submit" , (event) =>{
    event.preventDefault();
    agregarLista();
})

let listaActualizada = JSON.parse(localStorage.getItem("lista"));

if(listaActualizada){
    listaActualizada.forEach((elementos) =>{
        agregarLista(elementos);
    })
}


function agregarLista(elementos){
    let tarea = campoEntrada.value;

    if(elementos){
        tarea = elementos.nombre;
    }

    const nuevoElemento = document.createElement("li");
    nuevoElemento.innerText = tarea;
    lista.appendChild(nuevoElemento);
    campoEntrada.value = "";

    if(elementos && elementos.check){
        nuevoElemento.classList.add("checked");
    }

    const check = document.createElement("i");
    check.innerHTML = '<i class="fas fa-check-square"></i>';
    nuevoElemento.appendChild(check);

    const trash = document.createElement("i");
    trash.innerHTML = '<i class="fas fa-trash"></i>';
    nuevoElemento.appendChild(trash);

    check.addEventListener("click" , () =>{
        nuevoElemento.classList.toggle("checked");
        actualizarStorage();
    });

    trash.addEventListener("click" , () =>{
        nuevoElemento.remove();
        actualizarStorage();
    });
    actualizarStorage();
}

function actualizarStorage(){
    const listaStorage = document.querySelectorAll("li");

    let lista = [];

    listaStorage.forEach((nuevoElemento) =>{
        lista.push({
            nombre: nuevoElemento.innerText,
            check: nuevoElemento.classList.contains("checked"),
        });
    });
    localStorage.setItem("lista" , JSON.stringify(lista));
}