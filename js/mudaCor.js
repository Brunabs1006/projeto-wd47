;(function(){
    const btns = document.querySelectorAll('.opcoesDoCartao-radioTipo')


    btns.forEach(function(btn){
        btn.addEventListener('click',function(){
            const cor = btn.getAttribute('value');
           
            const cartao = btn.parentNode.parentNode;

            console.log(cartao.style )
            //cartao.style.backgroud = cor;
        })
    })



    /*
        cartao.addEventListener(function(evento){
            const btn = evento.target
            if(btn.classList.contains("cor")){
                cartao.style.backgroundColor = btn.getAttribute("cor")
            }
        })
    
    
    */
})()