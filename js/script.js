window.onload = function(){ 

    const btnMudaLayout = document.getElementById('btnMudaLayout')
    function mudaTexto(){ 
        if(btnMudaLayout.textContent.trim() === 'Linhas'){
            btnMudaLayout.textContent = 'Blocos'
        }else{
            btnMudaLayout.textContent = 'Linhas'
        }
    }

    const mural = document.querySelector('.mural')
    function mudaLayout(){
        mural.classList.toggle('mural--linha')
    }

    //btnMudaLayout.onclick = mudaTexto;
    btnMudaLayout.addEventListener('click', mudaTexto)
    btnMudaLayout.addEventListener('click', mudaLayout)
}