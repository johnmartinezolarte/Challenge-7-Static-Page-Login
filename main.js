// Se declaran los elementos del DOM que serán manipulados en el JS
const inputs=document.querySelectorAll('.input-registro');
const alerta=document.querySelectorAll('.alerta');
const alertaIngreso=document.querySelector('.alerta-ingreso');
const btnEnviar=document.getElementById('btnEnviar');
const btnCancelar=document.getElementById('btnCancelar');
const btnCloseModal=document.querySelector('.btn-close-modal');
const elementos=document.querySelector('.elementos');

// Se declaran las variables
const checkNameLastName=/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/;
const checkEmail=/^([a-z0-9_\.-]+)@dominio\.com$/;
const checkMobile=/^3\d{9}$/;
let namE, lastName, email, mobile;

// Se definen los eventos asociados
inputs.forEach((x,i)=>{
    x.addEventListener('input', ()=>request(i));
    x.addEventListener('blur', ()=>request(i));
});
btnEnviar.addEventListener('click', sendData);
btnCloseModal.addEventListener('click', refreshModal);
btnCancelar.addEventListener('click', refreshModal);

// Función validar los inputs
function request(e){
    let textAlert;
    alerta[e].textContent='';
    alerta[e].classList.add('text-danger');
    if(e===0){
        namE=checkNameLastName.test(inputs[e].value);
        if(!namE){
            textAlert=document.createTextNode('El campo no debe estar vacío y solo puede contener letras');
            alerta[e].appendChild(textAlert);
        }
    }else if(e===1){
        lastName=checkNameLastName.test(inputs[e].value);
        if(!lastName){
            textAlert=document.createTextNode('El campo no debe estar vacío y solo puede contener letras');
            alerta[e].appendChild(textAlert);
        }
    }else if(e===2){
        email=checkEmail.test(inputs[e].value);
        if(!email){
            textAlert=document.createTextNode('El campo no puede estar vacío y debe terminar en @dominio.com');
            alerta[e].appendChild(textAlert);
        }
    }else{
        mobile=checkMobile.test(inputs[e].value);
        if(!mobile){
            textAlert=document.createTextNode('El campo no puede estar vacío, debe iniciar con el número 3 y contener 10 dígitos');
            alerta[e].appendChild(textAlert);
        }
    }
    // Habilitar el botón Enviar
    if(namE&&lastName&&email&&mobile){
        btnEnviar.disabled = false;
    }else{
        btnEnviar.disabled = true;
    }
};

// Función enviar los datos
function sendData(){
    

    // Activar función cerrar y limpiar el modal
    setTimeout(afterSend,3000,btnCloseModal,elementos);
};

// Función cerrar y limpiar el modal tras el envío de los datos
function afterSend(eUno,eDos){
    eUno.click();
    eDos.scrollIntoView();
}
const prueba=document.querySelector('.prueba')

// Función limpiar el modal para los botones cerrar y cancelar
function refreshModal(){
    btnEnviar.disabled = true;
    inputs.forEach((x)=>{
        x.value='';
    });
    alerta.forEach((x)=>{
        x.textContent='';
    });
};