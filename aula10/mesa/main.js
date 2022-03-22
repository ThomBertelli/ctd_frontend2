let inputNameReference = document.getElementById("inputName")

let inputSurnameReference = document.getElementById("inputSurname")


let submitButtonReference = document.getElementById("buttonSubmit")

let outputDataReference = document.getElementById("outputData")

submitButtonReference.addEventListener('click',function(event){

    event.preventDefault()

    let userName = inputNameReference.value
    let userSurname = inputSurnameReference.value

    let fullName = userName.concat(' ').concat(userSurname)
    let noAnoE = fullName.replace(/a/g,"@").replace(/e/g,"3")

    outputDataReference.innerHTML = `
    <div>
    <p>O nome do usuário sem espaços extras: ${userName.trim()}.</p>
    <p>O nome do usuário com todas as letras maiúsculas: ${userName.toUpperCase()}.</p>
    <p>O nome do usuário com todas as letras minúsculas: ${userName.toLowerCase()}.</p>
    <p>O nome completo do usuário: ${fullName}.</p>
    <p>Subtituindo o "a" por "@" e o "e" por "3": ${noAnoE} </p>
</div>  
    `
})
