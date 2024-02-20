/**
 *  **Autor**: Enrique Fernández - Campoamor Fernández
 * **Github**: https://github.com/Kikenvt/tarea-5-Dwec-Diw
 */



//Definimos las variables para el formulario
const formulario = document.querySelector('#formulario')
const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const email = document.querySelector('#email')
const telefono = document.querySelector('#telefono')
const mensaje = document.querySelector('#mensaje')
const enviar = document.querySelector('#enviar')
const errores = document.querySelector('#errores')



//Declaramos el array para los mensajes de error
let mensajesErrores = []

const validarFormulario = (e) =>{
    e.preventDefault()
    mensajesErrores = []
    //Revisamos que el nombre no puede estar vacío, no empezar por una letra mayúscula o contener número
    nombre.value.trim().length === 0 && mensajesErrores.push('Name cannot be empty')
    !/^[A-Z][a-z]{1,40}$/.test(nombre.value.trim()) && mensajesErrores.push('Name must start with a capital letter and not contain numbers')
    
    apellido.value.trim().length === 0 && mensajesErrores.push('Surname cannot be empty')
    !/^[A-Z][a-z]{1,40}$/.test(apellido.value.trim()) && mensajesErrores.push('Surname must start with a capital letter and not contain numbers')
    
    //Revisamos que el email tenga estructura correcta
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value.trim()) && mensajesErrores.push('Email must have a valid structure')

    //Revisamos que el teléfono tenga estructura correcta
    !/^[679]\d{8}$/.test(telefono.value.trim()) && mensajesErrores.push('Phone number must start with 6, 7 or 9 and have 9 digits');
    // Revisamos que el mensaje no pueda ser vacio o menor a 10 carácteres
    mensaje.value.trim().length < 10 && mensajesErrores.push('Message too short')

    //Si no hay errores en el array se envia el formulario
    if(mensajesErrores.length === 0 && confirm('Are you sure..?')){
        formulario.submit()
        //Si hay mensajes de error se muestan el la lista
    }else if(mensajesErrores.length > 0){
        errores.textContent = ""
        
        mensajesErrores.forEach(function (mensaje){
            const li = document.createElement('li')
            li.textContent = mensaje
            errores.appendChild(li)
        })
    }
}

formulario.addEventListener('submit', validarFormulario)

