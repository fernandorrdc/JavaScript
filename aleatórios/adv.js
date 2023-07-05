
//globais -fora da função


let jog = 0
let comp = 0

    function adv() {
    
    let max = 100
    let min = 1
    let calc = max - min
    let alet = Math.random()
    comp = min + Math.trunc(calc * alet)

    }
   
    function jogar() {
        jog = Number(prompt('Digite um Número!'))
        let vai = document.getElementById('aki')

        if (jog < comp) {
            vai.innerHTML = `<p>Sua tentativa foi <strong>${jog}</strong>,ainda não,  dica =<strong> Maior</strong></p>`

        }else if (jog > comp) {
            vai.innerHTML += `<p>Sua tentativa foi <strong>${jog}</strong>,ainda não, dica =<strong> Menor</strong></p>`

        }else if(jog == comp){
            vai.innerHTML += `<p>Parabens ! <strong>${jog}</strong> = <strong>${comp}</strong></p>`
            document.getElementById('bt').style.visibility = 'hidden'
         }
    }