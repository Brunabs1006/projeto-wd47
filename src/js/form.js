;(function(){
    const form = document.querySelector('.formNovoCartao')
    
    let numeroDoCartao = 0;
    form.addEventListener('submit',function(e){
        e.preventDefault();

        const textArea = document.querySelector('.formNovoCartao .formNovoCartao-conteudo')
        const isTextAreaVazio = textArea.value.trim().length === 0

        if(isTextAreaVazio){
           const msgErro = document.createElement('div')
           msgErro.classList.add('formNovoCartao-msg')
           msgErro.textContent = "É necessário que você digite um texto para seu cartão.";

           //form.append(elemento);
           //form.insertBefore(elem,textarea) OUTRA MANEIRA


           const btnSubmit = form.children[form.children.length-1]
           form.addEventListener('animationend', function(event){
               event.target.remove();
           })
           form.insertBefore(msgErro, btnSubmit)
        }else{
            window.adicionaCartaoNoMural({conteudo:textArea.value})
        }

        textArea.value = "";

    })

    form.classList.remove('no-js')

})()