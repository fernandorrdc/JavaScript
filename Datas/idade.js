
function idade() {

    let dtn = parseInt(prompt('Digite o ano de Nascmento'))
    let agora = new Date
    let ano = agora.getFullYear()
    let ani = ano - dtn

    let vai = document.querySelector('#aki')
    vai.innerHTML = `Ano de Nascimento foi <strong>${dtn}</strong> em <strong>${ano}</strong> faz <strong>${ani}</strong>anos`
    
}