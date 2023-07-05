let cont = 0
let resp = document.querySelector('#res')

    function contaraz() {
        cont++ //Mesmoque cont+1
        resp.innerHTML = `Contando crescente: <strong>${cont}</strong>`

    }

    function contarza() {
        cont--
        resp.innerHTML = `Contando decrescente: <strong> ${cont} </strong>`
    }

    function zerar() {
        cont = 0
        resp.innerHTML = null
        
    }