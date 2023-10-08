
document.addEventListener('DOMContentLoaded',function (){
    const barradeprogresso = document.querySelector('.progress');

    const tempoDeCarregamento = 4000;

    let progresso = 1;

    function atualizarBarra(){
        if(progresso < 100){
            progresso += 1;
            barradeprogresso.style.width = progresso + "%";
            setTimeout(atualizarBarra,tempoDeCarregamento / 100);
        }else{
            setTimeout(function(){
                window.location.href ='inicio.html'
            },1000);
        }
    }

    atualizarBarra()

})
