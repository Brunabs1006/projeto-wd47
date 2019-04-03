// ;(ponto e virgula) no inicio minificacao para ficar em apenas uma linha
;(function(){ //escopo de funcao
    const btns = document.querySelectorAll('.opcoesDoCartao-remove') // querySelectorAll retorna um array

    for(let i=0;i<btns.length;i++){
        btns[i].addEventListener('click', function(){        
            const cartao = btns[i].parentElement.parentElement            
            cartao.classList.add('cartao--some')
            cartao.addEventListener('transitionend',function(){
                cartao.remove();
            })
        })

    }
    
})() //criação de IIFE (immediately invoked function expression)
