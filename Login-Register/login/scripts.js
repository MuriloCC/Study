const login = document.querySelector('#login-button').addEventListener('click', verify)

function verify(){
    let email = document.querySelector('#email')
    let pass = document.querySelector('#pass')

    if(email.value == Data.email && pass.value == Data.password){
        alert('email e senha corretos!')
    }else{
        alert('email e/ou senha pode estar errado')
    }       
}
