const emailUser = document.getElementById('email')
const senhaUser = document.getElementById('senha')
const errorE = document.getElementById('errorE')
const errorS = document.getElementById('errorS')
const sucessE = document.getElementById('sucessEmail')
const sucessS = document.getElementById('sucessSenha')

function verifica() {
    
   const em = emailUser.value;
   const se = senhaUser.value;

    if (!em.match(/^[\w._-]+\@[\w_.-]+\.[\w]/)) {
        errorE.innerText = "Verifique seu Email e tente novamente";
        
    }else{
        sucessE.innerText = "Email válido"
        errorE.style.display = "none"
    }
    if(!se.match(/[A-Z][a-z]+.+\d+\W/)) {
        errorS.innerText = "Verifique sua Senha e tente novamente";
    }else{
        sucessS.innerText = "Senha válida"
        errorS.style.display = "none"
    }
}

function limpe() {
    location.reload()
}