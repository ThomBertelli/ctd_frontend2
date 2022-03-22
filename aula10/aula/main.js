let buttonCreateAccountReference = document.querySelector('#accountCreate')
let inputNameReference = document.querySelector('#inputName')
let inputTerms = document.querySelector("#inputTerms")
let inputAgeReference = document.querySelector("#inputAge")
let inputTextareaReference = document.querySelector('#inputObs')

let inputAccountType = document.getElementsByName('accountType')

let user ={}

buttonCreateAccountReference.addEventListener('click',function(event){

    event.preventDefault()

    user.name = inputNameReference.value
    user.terms = inputTerms.checked
    user.age = Number(inputAgeReference.value)
    user.obs = inputTextareaReference.value.trim()
    
    

    for(let type of inputAccountType){
        if(type.checked) {
            user.accountType = type.value
        }
    }

    if(user.age < 14){
        alert("Menor incapaz")
    }


    console.log(user)
})