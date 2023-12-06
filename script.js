const titulos = document.getElementsByClassName('titulo')
const textos = document.getElementsByClassName('texto')
let divEs = document.getElementById('es')
let divEn = document.getElementById('en')
let divPtbr = document.getElementById('ptbr')
let titulosArray = ['titulo1', 'titulo2', 'titulo3', 'titulo4', 'titulo5', 'titulo6']
let paragrafosArray = ['paragrafo1', 'paragrafo2', 'paragrafo3', 'paragrafo4', 'paragrafo5', 'paragrafo6']
function escolher(idioma){
    let divClicada = document.getElementById(idioma)
    divPtbr.classList.remove('selected')
    divEn.classList.remove('selected')
    divEs.classList.remove('selected')
    divClicada.classList.add('selected')
    console.log('oi')
    console.log(titulosArray)
    fetch(`textos_${idioma}.json`)
    .then(resposta => resposta.json())
    .then(texto => {
        for (let i = 0; i < titulos.length; i++) {
            const element = titulos[i];
            element.innerHTML = texto[titulosArray[i]];
        }
        for (let i = 0; i < textos.length; i++) {
            const element = textos[i];
            element.innerHTML = texto[paragrafosArray[i]];
        }
        
    })
    .catch(error => console.error('Erro bucando textos:', error));
}

function iniciar() {
    fetch(`textos_ptbr.json`)
    .then(resposta => resposta.json())
    .then(texto => {
        for (let i = 0; i < titulos.length; i++) {
            const element = titulos[i];
            element.innerHTML = texto[titulosArray[i]];
        }
        for (let i = 0; i < textos.length; i++) {
            const element = textos[i];
            element.innerHTML = texto[paragrafosArray[i]];
        }
    })
}
iniciar()
