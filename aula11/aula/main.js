let inputNameReference = document.querySelector('#inputName')
let inputPasswordReference = document.querySelector("#inputPwd")
let inputButtonReference = document.querySelector("#buttonLogin")
let inputErrorMessageReference = document.querySelector("#errorAlert")
let inputErrorMessagePwdReference = document.querySelector("#errorAlertPwd")


inputButtonReference.addEventListener('click',function(event){

    event.preventDefault()

    //Verifica se os requisitos colocados no HTML estão sendo cumpridos "required", "minLength", "maxLength"
    if(inputNameReference.checkValidity()){
        inputNameReference.classList.remove('formFieldInvalid')
        inputErrorMessageReference.classList.remove('show')

    }else{
        inputNameReference.classList.add('formFieldInvalid')
        inputErrorMessageReference.classList.add('show')
    }

    if(inputPasswordReference.checkValidity()){
        inputPasswordReference.classList.remove('formFieldInvalid')
        inputErrorMessagePwdReference.classList.remove('show')
    }else{
        inputPasswordReference.classList.add('formFieldInvalid')
        inputErrorMessagePwdReference.classList.add('show')
    }

    
})