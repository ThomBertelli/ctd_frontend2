let botaoEnviar = document.querySelector('#enviar')

botaoEnviar.addEventListener('click',function(event){
    
    event.preventDefault()
})

window.onload = function(){
    alert("A página foi carregada com sucesso")
}
let formReference = document.querySelector("#formulario")
formReference.addEventListener('mouseover', function(event){
    document.querySelector('#enviar').style.color="blue"

})
formReference.addEventListener('mouseout', function(event){
    document.querySelector('#enviar').style.color="red"

})

let inputReference = document.querySelector("input")
let contador = 0

inputReference.addEventListener('keydown', function(event){
    
    contaLetras()
    document.getElementById("contador").innerHTML = contador
    let espelho = inputReference.value
    document.getElementById("espelho").innerHTML = espelho
})

function contaLetras(){
    contador = contador + 1
}



