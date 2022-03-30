

const barsToggle = document.getElementById('bars-toggle');
const navMenu = document.getElementById('menu-mobile');

barsToggle.addEventListener('click', ()=>{
    navMenu.classList.toggle('menu-visible');
})

/*Validacion de formulario*/

const nombre = document.getElementById("name");
const email = document.getElementById("email");
const boton = document.getElementById("submit");
const resultado = document.querySelector(".resultado-form");

if(boton){
    boton.addEventListener("click",(e) =>{
        e.preventDefault();
        let error = validaCampos();
        if(error[0]){
            resultado.innerHTML = error[1];
            resultado.classList.add("red");
        }else{
            resultado.innerHTML = "Solicitud enviada correctamente";
            resultado.classList.add("green");
        }
    });
    
    const validaCampos = ()=>{
        let error = [];
        if(nombre.value.length < 4 || nombre.value.length > 40 ){
            error[0] = true;
            error[1] = "El nombre es invalido.";
            return error;
        }else if(email.value.length < 5 ||
                 email.value.length > 40 ||
                 email.value.indexOf("@") == -1 ||
                 email.value.indexOf(".") == -1){
            error[0] = true;
            error[1] = "El mail es invalido.";
            return error;
        }
        error[0] = false;
        return error;
    }
}