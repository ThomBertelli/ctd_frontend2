let inputCepReference = document.querySelector('#cep')

let inputLogradouroReference = document.querySelector('#logradouro')

let submitButtonReference = document.querySelector('button')

submitButtonReference.addEventListener('click',function(event){

    
    event.preventDefault()

    fetch(`https://viacep.com.br/ws/${inputCepReference.value}/json/`)
        .then(
            response => {
                response.json().then(
                    endereco => {
                        inputLogradouroReference.value = endereco.logradouro
                    }
                )
            }
        )

    //let apiResultObject = JSON.parse(apiResultJson)
    
    //console.log(apiResultJson)

})

