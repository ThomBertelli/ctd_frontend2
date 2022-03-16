//ao terminar de carregar a página
window.onload = function(){

}

let buttonreference = document.querySelector('#mainButton')
//ao clicar
buttonreference.onclick = function(){

    console.log("Clicou!!!!!!")
}

//ao clicar
buttonreference.addEventListener('click',function(event){
    console.log("O click foi detectado")
    //impede o comportamento padrão
    event.preventDefault()
    //altera CSS
    document.querySelector('#mensagemSucesso').style.opacity=1
})

let userNameInputReference = document.querySelector('#userNameInput')
//ao passar o mouse sobre
userNameInputReference.addEventListener('mouseover', function(event){
    document.querySelector('#dica').style.opacity=1

})

//ao precionar uma tecla do teclado
userNameInputReference.addEventListener('keydown', function(event){
    console.log('digitou')
})
