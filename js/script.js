let btn = document.querySelector('.btn');
let times = document.querySelector('.times');
let modalCont = document.querySelector('.modal'); 
let enviar = document.querySelector('.enviar');

let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let message = document.querySelector('#texto');

function abrir(){
    modalCont.style.display = 'block';
}

function fechar(){
    modalCont.style.display = 'none';
}

function enviarInfo(e){
    e.preventDefault();
    if(nome.value === '' || email.value === '' || message.value === ''){
        alert('Preencha os campos obrigatórios.');
    }else{
        alert('Formulário enviado com sucesso.');
        nome.value = '';
        email.value = '';
        message.value = '';
        fechar();
    }
}

btn.addEventListener('click', abrir);
times.addEventListener('click', fechar);
enviar.addEventListener('click', enviarInfo);