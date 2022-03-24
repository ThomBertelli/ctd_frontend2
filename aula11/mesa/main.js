let inputNameReference = document.querySelector('#nome')

let inputHobbiesReference = document.getElementsByName('hobbies')

let inputNacionalidadeReference = document.getElementsByName('nacionalidade')

let fieldsetHobbiesReferece = document.querySelector('#hobbiesFieldser')

let fieldsetNacionalidadeReference = document.querySelector('#nacionalidadeFieldset')

let inputRadioBrasilreference = document.querySelector("#nacionalidadeBrasileira")

let smallReference = document.getElementById('errorMessage')

let buttonReference = document.querySelector('button')

let errorName = true
let errorHobbies = true
let errorCountry = true



inputNameReference.addEventListener('keyup',function(event){
    
    verifyName(inputNameReference)
    activeButton()
})

fieldsetHobbiesReferece.addEventListener('click',function(event){
    let hobbierCount = 0
    

    for(let hobbies of inputHobbiesReference){
        if (hobbies.checked){
            hobbierCount++
        }
    }
    if (hobbierCount >= 1 && hobbierCount < 5){
        fieldsetHobbiesReferece.classList.remove('problem')
        errorHobbies = false
    }else{
        fieldsetHobbiesReferece.classList.add('problem')
        errorHobbies = true
        
    }
    activeButton()
})


fieldsetNacionalidadeReference.addEventListener('click',function(event){
    

    let nacionalidadCount = 0
    for(let pais of inputNacionalidadeReference){
        if (pais.checked){
            nacionalidadCount = nacionalidadCount + 1
        }
    }

    if (nacionalidadCount < 1){
        fieldsetNacionalidadeReference.classList.add('problem')
        errorCountry = true
    }else{
        fieldsetNacionalidadeReference.classList.remove('problem')
        errorCountry = false
    }

    if (inputRadioBrasilreference.checked){
        smallReference.classList.add('show')
        fieldsetNacionalidadeReference.classList.add('problem')
        errorCountry = true

    }else{
        smallReference.classList.remove('show')
        fieldsetNacionalidadeReference.classList.remove('problem')
        
    }
    
    activeButton()

    console.log(errorCountry)
    console.log(errorName)
    console.log(errorHobbies)
})



function verifyName(reference){
    let noTrim = reference.value.trim()
    if(reference.value.length > 6 &&
    reference.value.length < 150 &&
    noTrim.split(" ").length > 1 &&
    reference.value.match(/^[a-zA-Z ]+$/g)){
        reference.classList.remove('error')
        errorName = false

    }else{
        reference.classList.add('error')
        errorName = true
    }
}

function activeButton(){
    if (!errorName && !errorHobbies && !errorCountry){
        buttonReference.disabled = false
    }else{
        buttonReference.disabled = true
    }
}


