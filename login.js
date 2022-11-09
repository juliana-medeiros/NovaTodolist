document.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        const button = document.querySelector(".button");
        button.click();
    }
});

const form = document.getElementById('form');
const nome = document.getElementById('nome');
const login = document.getElementById('login');
const email = document.getElementById('email');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const senha = document.getElementById('senha');
const confirmsenha = document.getElementById('confirmsenha');
const span = document.querySelectorAll('span');

form.addEventListener('submit', (e) => {
    e.preventDefault()
})

function entrar() {
    if(nome.value, login.value, email.value, senha.value, confirmsenha.value == ""){

    }
    else if (nome.value.length < 10, login.value.length > 10, !emailRegex.test(email.value), senha.value != confirmsenha.value){

    }
    else{
        window.location.href = "index.html"
    }
}