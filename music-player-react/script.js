function mudaTela(){
    document.getElementsByClassName("logo-splash")[0].style.display= "none";
    document.getElementsByClassName("logo-header")[0].style.display= "block";
    
}

function repete(){
    console.log ("repetir faixa");
}

function avanca(){
    console.log ("avançou");
}

function inicia(){
    document.getElementsByClassName("botaoPlay-container")[0].style.display= "none";
    document.getElementsByClassName("botaoPause-container")[0].style.display= "flex";
}

function pausa(){
    document.getElementsByClassName("botaoPlay-container")[0].style.display= "flex";
    document.getElementsByClassName("botaoPause-container")[0].style.display= "none";
}

function retrocede(){
    console.log ("retrocedeu");
}

function tocaAleatorio(){
    console.log ("toca faixas aleatoriamente")
}
