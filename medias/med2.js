
function med(){
    let nome = prompt('Informe seu Nome', 'Ex. Maria ')
    let n1 = Number(prompt('Digite Sua Nota 1'))
    let n2 = Number(prompt('digite sua Nota 2',))
    let md=(n1+n2)/2

    
    let msg
    if (nome=="" || n1=="" || n2=="") {
        alert('Campo está vazio!\n preencha-0') 
        
    }else if (md<6) {
        msg = 'Não deu!'
        
    }else{
        msg = 'Deu Certo!'
    }

    let recb = document.getElementById('aq')
    recb.innerHTML = `<p><strong>${nome}</strong></p>`
    recb.innerHTML += `Sua Nota 1 = ${n1} <br> Sua Nota 2 = ${n2} <br> Sua Média   = <mark> ${md.toFixed(2)}</mark> <br>`
    recb.innerHTML += `<p>A sua situação é: <strong>${msg}</strong></p>`
}