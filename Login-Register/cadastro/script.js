const users = [
    {
        email: 'murilo123@gmail.com',
        password: '1234'
    },

    {
        email: 'pedro.castilho99@gmail.com',
        password: '4321'
    }
]

const Data = {
    all: users,

    add(user){
        Data.all.push(user)
    }
}

const signUpForm = {
    email: document.querySelector('input#signup-email'),
    password: document.querySelector('input#signup-password'),

    getValues(){
        return {
            email: signUpForm.email.value,
            password: signUpForm.password.value
        }
    },

    verify(){
        const { email, password } = signUpForm.getValues()

        if(email == '' || password == ''){
            throw new Error('Favor preencher todos os dados')
        }

    },

    clearFields(){
        signUpForm.getValues().email = ""
        signUpForm.getValues().password = ""
    },

    submit(event){
        event.preventDefault()
        try{
            let user = signUpForm.getValues()
            signUpForm.verify()
            Data.all.forEach((userData) => {
                if(user.email == userData.email){
                    throw new Error('este email já existe')
                }
            })
            Data.add(user)
            signUpForm.clearFields()
            console.log(Data.all)
        }catch(error){
            alert(error.message)
        }
    },
}
