import somar from './modules/somar.js'
import subtrair from './modules/subtrair.js'
import dividir from './modules/dividir.js'
import multiplicar from './modules/multiplicar.js'

let resultado = 0

let botaoSomar = document.querySelector('#somar')
let botaoSubtrair = document.querySelector('#subtrair')
let botaoMultiplicar = document.querySelector('#multiplicar')
let botaoDividir = document.querySelector('#dividir')
let botaoLimpar = document.querySelector('#limpar')

let numeroUm = document.querySelector('#num1')
let numeroDois = document.querySelector('#num2')

botaoSomar.addEventListener('click', function(event){
    let um = Number(numeroUm.value)
    let dois = Number(numeroDois.value)

    resultado = somar(um,dois)
    document.getElementById("resultado").innerHTML = resultado
    event.preventDefault()
})

botaoSubtrair.addEventListener('click', function(event){
    let um = Number(numeroUm.value)
    let dois = Number(numeroDois.value)

    resultado = subtrair(um,dois)
    document.getElementById("resultado").innerHTML = resultado
    event.preventDefault()
})

botaoMultiplicar.addEventListener('click', function(event){
    let um = Number(numeroUm.value)
    let dois = Number(numeroDois.value)

    resultado = multiplicar(um,dois)
    document.getElementById("resultado").innerHTML = resultado
    event.preventDefault()
})

botaoDividir.addEventListener('click', function(event){
    let um = Number(numeroUm.value)
    let dois = Number(numeroDois.value)

    resultado = dividir(um,dois)
    document.getElementById("resultado").innerHTML = resultado
    event.preventDefault()
})

botaoLimpar.addEventListener('click', function(){
    resultado = ''
    document.getElementById("resultado").innerHTML = resultado
})



