let inputEmailReference = document.getElementById('inputEmail')

let inputPasswordReference = document.getElementById('inputPassword')

let buttonSubmitReference = document.querySelector('button')


buttonSubmitReference.addEventListener('click', event =>{
    event.preventDefault()

    let credencials = {

        email: inputEmailReference.value,
        password: inputPasswordReference.value

    }

    let headersRequest = {
        
        'Content-Type': 'application/json'

    }

    let requestConfig = {

        method: 'POST',
        body: JSON.stringify(credencials),
        headers: headersRequest

    }

    fetch('https://ctd-todo-api.herokuapp.com/v1/users/login', requestConfig).then(

        response => {

            response.json().then(

                data => {

                    console.log(data)
                    localStorage.setItem('token', data.jwt)

                }
            )

        }
    )
})