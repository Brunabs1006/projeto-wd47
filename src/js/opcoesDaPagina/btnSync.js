;(function(){
    const btnSync = $("#btnSync")

    btnSync.click(function(){
        btnSync.addClass("botaoSync--esperando")
        btnSync.removeClass("botaoSync--sincronizado")

        const salvadorDeCartoes = new XMLHttpRequest()
        salvadorDeCartoes.open('POST', 'http://ceep.herokuapp.com/cartoes/salvar')
        salvadorDeCartoes.setRequestHeader("Content-Type", "application/json")

        const cartoes = document.querySelectorAll(".cartao")
        const infosDoMural = {
            usuario: "seuemail@email.com.br",
            cartoes: Array.from($('.cartao')).map(function(cartao){
                return {
                    conteudo: cartao.querySelector(".cartao-conteudo").textContent,
                    cor: getComputedStyle(cartao).getPropertyValue("background-color")

                }
            })

        }

        salvadorDeCartoes.send(JSON.stringify(infosDoMural))

        salvadorDeCartoes.addEventListener('load', function(){
            const response = JSON.parse(salvadorDeCartoes.response)
            console.log(`${response.quantidade} cartoes salvos em ${response.usuario}`)

            btnSync.removeClass("botaoSync--esperando")
            btnSync.addClass('botaoSync--sincronizando')
        })

        salvadorDeCartoes.addEventListener('error', function(){
            btnSync.removeClass('botaoSync--esperando')
            btnSync.addClass('botaoSync--deuRuim')
        })
    }) 
    
    btnSync.removeClass('no-js')
})()