//Alerta
function cambiarTitulo(){
  let valorTitulo = document.getElementById('titulo').value
  let valorDescripcion = document.getElementById('descripcion').value
  let alertaT = document.getElementById('alertTitulo')
  let alertaD = document.getElementById('alertDescripcion')
  alertaT.textContent = valorTitulo
  alertaD.textContent = valorDescripcion
  
}
function mostrarAlerta(){
  let alerta = document.getElementById('miAlerta');
  alerta.classList.remove('d-none');
  alerta.classList.add('d-block');
  let boton = document.getElementById('botonAlerta')
  boton.addEventListener('click', cambiarTitulo)
}



//Popover

//  JS bootstrap
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

function modificarPopover() {
  
  let valorTitulo = document.getElementById('titulo').value
  let boton = document.getElementById('botonPop')
  let valorContenido = document.getElementById('descripcion').value

  boton.setAttribute('data-bs-content', valorContenido)
  boton.setAttribute('data-bs-title', valorTitulo)
  //Para modificar la instancia
  let popover = bootstrap.Popover.getInstance(boton)
            if (popover) {
                popover.dispose();
            }
            new bootstrap.Popover(boton);
        }

//Toast 

function modificarToast(){
  let valorTitulo = document.getElementById('titulo').value
  let valorContenido = document.getElementById('descripcion').value
  let tituloToast = document.getElementById('toastTitulo')
  let contenidoToast = document.getElementById('toastCuerpo')
  tituloToast.textContent = valorTitulo
  contenidoToast.textContent = valorContenido
}

function mostrarToast(){

  modificarToast();

  let miToast = new bootstrap.Toast(document.getElementById('liveToast'));
  miToast.show();
}

//Offcanvas

function modificarOffcanvas(){
  let valorTitulo = document.getElementById('titulo').value
  let valorContenido = document.getElementById('descripcion').value

  let titulo = document.getElementById('tituloCanvas')
  let cuerpo = document.getElementById('cuerpoCanvas')

  titulo.textContent = valorTitulo 
  cuerpo.textContent = valorContenido
}
