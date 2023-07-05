
function ale() {

    let max = 100
    let min = 1
    let calc = max - min
    let aleat = Math.random()//gera aleatório entre o-1
    let num = min + Math.trunc(calc * aleat)//gera aleatório entre 2 números

    let vai = document.querySelector('#aki')
    vai.innerHTML += `<p>o valor aleatório é:<strong> ${num}</strong></p>`

}

function limp() {
    let vai = document.querySelector('#aki')
    vai.innerHTML = null
    
}