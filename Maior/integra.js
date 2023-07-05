
function maior() {
    let Nu1 = Number(prompt('Digite 1º Número'))
    let Nu2 = Number(prompt('Digite 2º Número'))

    let rcb = document.querySelector('#aki')
        if (Nu1 > Nu2) {
            rcb.innerHTML = `O maior número entre ${Nu1} e ${Nu2} = ${Nu1} `
        }
        else if (Nu1 < Nu2){
            rcb.innerHTML = `O maior número entre ${Nu1} e ${Nu2} = ${Nu2}`

        }else{
            rcb.innerHTML = `O maior número entre ${Nu1} e ${Nu2} = <strong>Sã0 iguais</strong>`
        }

        
       


    }
