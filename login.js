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

function validarNome() {
    if (nome.value == ""){
        span[0].style.display = "none";
    }
    else if (nome.value.length < 10){
        nome.style.border="3px solid #A72608";
        span[0].style.display = "block";
    }
    else{
        nome.style.border="3px solid #004E98";
        span[0].style.display = "none";
        var nomeSave = document.querySelector("#nome").value;
        localStorage.setItem('nome', nomeSave);
    }
}

function validarLogin() {
    if (login.value == ""){
        span[1].style.display = "none";
    }
    else if (login.value.length > 10){
        login.style.border = "3px solid #A72608";
        span[1].style.display = "block";
    }
    else{
        login.style.border = "3px solid #004e98";
        span[1].style.display = "none";
        var loginSave = document.querySelector("#login").value
        localStorage.setItem('login', loginSave)
    }
}

