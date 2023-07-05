
function data() {

    let meses = new Array ('jan','fev','mar','abril','maio','jun','jul','ago','set','out','nov','dez')
    let semana =new Array ('seg','ter','quarta','quinta','sex','sáb','dom')
    let agora = new Date
    let hora = agora.getHours()
    let dia = agora.getDate()
    let min = agora.getMinutes()
    let seg = agora.getSeconds()
    let mes = agora.getMonth() // jan =0 | fev = 1 ...
    let ano = agora.getFullYear()
    let sem = agora.getDay()

    let vai = document.getElementById('aki')

    vai.innerHTML = `<p>Dia da semana = <strong>${dia}</strong></p>`
    vai.innerHTML += `<p>Sua Semana = <strong>${semana[sem]}</strong></p>`
    vai.innerHTML += `<p>Estamos no Mês = <strong>${meses[mes]}</strong></p>`
    vai.innerHTML += `<p>Ano virgente é = <strong>${ano}</strong></p>`
    vai.innerHTML += `<p>são exatamente = <strong>${hora}:</strong><strong>${min}</strong>:<strong>${seg}</strong></p>`

    
}