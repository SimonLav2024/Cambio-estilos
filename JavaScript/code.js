const body = document.body;
const divCambio = document.getElementById("container");
const btnCambio = document.getElementById("botonCambio");

btnCambio.addEventListener("click", function(){
    if(body.classList.contains("tema-claro")){
        //cambiar a tema-oscuro
        body.classList.add("tema-oscuro");
        body.classList.remove("tema-claro");
    }else{
        //cambiar tema-oscuro
        body.classList.add("tema-claro");
        body.classList.remove("tema-oscuro");
    }
});

//cambio del container
btnCambio.addEventListener("mouseover", function(){
    if(divCambio.classList.contains("container")){
        divCambio.classList.add("container2");
        divCambio.classList.remove("container");
    }else{
        divCambio.classList.add("container");
        divCambio.classList.remove("container2");
    }
})

