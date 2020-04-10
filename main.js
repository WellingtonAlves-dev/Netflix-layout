let setas = document.querySelectorAll("#seta");

const validarTamanho = (localizacao, tamanhoMaximo, movimento) => {
    let somaDosFatores = localizacao + movimento;
    console.log("soma: " + somaDosFatores);
    console.log("tm" + tamanhoMaximo);
    console.log("local" + localizacao);
    if(somaDosFatores > tamanhoMaximo || (tamanhoMaximo - somaDosFatores) < movimento * 2) {
        return 0;
    }
    else {
        return localizacao + movimento;
    }
}

setas.forEach(seta => {
    seta.onclick = (event) => {
        let sessao = event.target.parentNode            // left: sessao.scrollLeft + 500

        sessao.scroll({
            top: 0,
            left: validarTamanho(sessao.scrollLeft, sessao.scrollWidth, 500),
            behavior: 'smooth'
        });
    }
})

document.onscroll = () => {
    if(window.scrollY > 20) {
        document.querySelector("navbar").className = "black-nav"
    }
    else {
        document.querySelector("navbar").className = ""
    }
}