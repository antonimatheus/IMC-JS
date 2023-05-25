/*

Calculadora IMC

imc = peso / altura ** 2
    resultado = imc 
    
    */

let peso = document.getElementById('ipeso')
let altura = document.getElementById('ialtura')
let res = document.getElementById('res')

function analisar() {
    let p = Number(peso.value)
    let alt = Number(altura.value)
    let imc = p / alt ** 2
    let resultado = imc
    res.innerHTML = `Seu IMC é de ${resultado}`
}
