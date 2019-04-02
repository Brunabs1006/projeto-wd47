;(function(){
    const btnAjuda = document.querySelector('#btnAjuda')

    btnAjuda.addEventListener('click',function(){
        const ajudas = [{conteudo: "Bem vindo ao Ceep", cor:"#F05450"},
                        {conteudo: "Crie um cartão atravez do formulário", cor:"#92C4EC"}];

        ajudas.forEach(function(ajuda){
            window.adicionaCartaoNoMural(ajuda)
        })

    })

    btnAjuda.classList.remove('no-js')
})()