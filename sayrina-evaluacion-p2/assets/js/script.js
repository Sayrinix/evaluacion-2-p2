//Alerta

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-primary alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

let xd = document.getElementById('cambiar').addEventListener('click',function(){
    let inputTitulo = document.getElementById('titulo').value
    let botonAlert = document.getElementById('liveAlertBtn').setAttribute('data-titulo',inputTitulo)
    appendAlert(botonAlert)
});

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', (event) => {
    appendAlert(xd)
    let boton = event.relatedTarget
    let botonAlert = boton.getAttribute('data-titulo') 
  })
}

//if(titulo == ''){
    //document.querySelector('.alert').innerHTML = ''
//} else {
    //document.querySelector('.alert').innerHTML = appendAlert(titulo)
//}

