const users = [
    {
        email: 'muras@gmail.com',
        password: 'muras123'
    },
    {
        email: 'pino@gmail.com',
        password: 'pino123'
    }
]

console.log(users)

const Login = {
    email: document.querySelector('input#email'),
    password: document.querySelector('input#pass'),

    getValues(){
        return{
            email: Login.email.value,
            password: Login.password.value
        }
    },

    check(){
        const { email, password } = Login.getValues()

        if(email == '' || password == ''){
            throw new Error ('Favor preencher todos os campos')
        }
    },

    submit(event){
        event.preventDefault()

        try{
            let user = Login.getValues()
            Login.check()
            users.forEach(userData => {
                if(user.email !== userData.email || user.password !== userData.password){
                    throw new Error('senha ou email invalidos')
                }
                return alert('Logado na secreta')
            })

        }catch(error){

        }
    }
}