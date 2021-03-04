
let recuperanome = document.getElementById('nome');
let recuperaaltura = document.getElementById('altura');
let recuperapeso = document.getElementById('peso')
let resp = document.getElementById('resposta');
let recuperasSexoF = document.getElementById('sexoF');
let recuperasSexoM = document.getElementById('sexoM');



function Calcular(){

    //Peso / (altura x altura)
    let peso = (Number(recuperapeso.value));
    let altura = (Number(recuperaaltura.value));
    let nome = (recuperanome.value);

   
    let calculo = (peso / (altura * altura));
    resp.style.color = '#fff';
    resp.innerHTML += ('' + nome +' !!'+  '<br/>' );
    resp.innerHTML += ('A sua massa corporal é: ' + calculo.toFixed(2) + '<br>');

    // Validação de campo nulo

    if(peso == ''){
        alert('Coloque seu peso');
        resp.innerHTML = ''
    }
    if(altura == ''){
        alert('Coloque sua altura');
        resp.innerHTML = ''
    }

    recuperapeso.value = " "
    recuperaaltura.value = " "
    recuperanome.value = " "

    if(recuperasSexoF.checked == true){
        alert('Voce selecionou ' + recuperasSexoF.value);
    }


    else if(recuperasSexoM.checked == true){
        alert('Voce selecionou ' + recuperasSexoM.value);
    }
  

    if(calculo >= 17 && calculo <= 18.4 ){
        resp.innerHTML += ('Você está abaixo do peso');
    } 
    else if(calculo >= 18.5 && calculo <= 24.9 ){
        resp.innerHTML += ('Você está com o peso normal');
    }
    else if(calculo >= 25 && calculo <= 29.9 ){
        resp.innerHTML += ('Você está acima do peso');
    }
    else if(calculo >= 30 && calculo <= 34.9 ){
        resp.innerHTML += ('Você está com Obesidade Grau I');
    }
    else if(calculo > 40 && calculo < 50){
        resp.innerHTML += ('Você está com Obesidade Grau III');       
    }
    else if(calculo < 17 || calculo > 60){
        resp.innerHTML += ('Peso corporal inválido coloque valores válidos');
    }
  

}

function Limpar(){   
    resp.innerHTML = '';
}