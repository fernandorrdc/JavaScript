
function est() {

    let mes = prompt('Informe o mês: \n ex: janeiro')
    let vai = document.querySelector('#aki')
    let msg

    switch (mes.toUpperCase()) {

        case 'JANEIRO': 
        case 'FEVEREIRO': 
        case 'MARÇO':
            msg = 'INVERNO'
            break

        case 'ABRIL': 
        case 'MAIO': 
        case 'JUNHO':
            msg = 'PRIMAVERA'
            break
        
        case 'JULHO': 
        case 'AGOSTO': 
        case 'SETEMBRO':
            msg = 'VERÃO'
            break  
            
        case 'OUTUBRO': 
        case 'NOVEMBRO': 
        case 'DESEMBRO':
            msg = 'OUTUNO'
            break 

        default:
            msg = 'INDEFENIDA'
            break
    }
    vai.innerHTML = `<p>O mês de <strong>${mes}</strong> é a estação <strong>${msg}</strong></p>`
}