

function calc() {

    let n1 = Number(prompt('Informe 1º Número'))
    let n2 = Number(prompt('Digite o 2º Número'))

    let op = prompt(`Valores informados: ${n1} e ${n2}\n Escolha operação:\n [1] Somar \n [2] Subtrair \n [3]Multiplicar \n [4] para dividir`)

    let envio = document.getElementById('aki')
    envio.innerHTML = `<h2>Calculando</h2>`

    switch (op) { // A estrutura switch basicamente permite você testar valores dentro de uma variável ou expressão. Ela é compatível apenas com números inteiros e strings.
        case '1':
            envio.innerHTML += `<p>A soma entre <strong>${n1}</strong> + <strong>${n2}</strong> = <strong>${n1+n2}</strong></p>`
            break // O break é obrigatório em cada case. Se não for colocado, acontecerá a execução de vários comandos indesejados de outros cases.

        case '2':
            envio.innerHTML += `A subtração  entre <strong>${n1}</strong> - <strong>${n2}</strong> = <strong>${n1-n2}</strong>`
            break

        case '3':
            envio.innerHTML += `A Multplicação entre <strong>${n1}</strong> * <strong>${n2}</strong> = <strong>${n1*n2}</strong>`
            break
            
        case '4':
            envio.innerHTML += `A Divisão entre <strong>${n1}</strong> / <strong>${n2}</strong> = <strong>${(n1/n2).toLocaleString('Pt-BR')}</strong>` //uso adequado para formatos Brasil   
            break

        default:
            envio.innerHTML += `Você digitou em <strong>${n1}</strong> e <strong>${n2}</strong> valores invalidos, preencha corretamente.`
            break
    }
    
}