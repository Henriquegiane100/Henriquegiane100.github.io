function init(){
    //variaveis
    var resultado = document.getElementById("resultado");
    var reset = document.getElementById("reset");
    var soma = document.getElementById("soma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicação");
    var division = document.getElementById("division");
    var igual = document.getElementById("igual");
    var um = document.getElementById("um");
    var dois = document.getElementById("dois");
    var tres = document.getElementById("tres");
    var quatro = document.getElementById("quatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var sete = document.getElementById("sete");
    var oito = document.getElementById("oito");
    var nove = document.getElementById("nove");
    var zero = document.getElementById("zero");
    
    //Eventos
    um.onclick = function(e){
        resultado.textContent = resultado.TextContent + "1";
    }
    dois.onclick = function(e){
        resultado.textContent = resultado.TextContent + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.TextContent + "3";
    }
    quatro.onclick = function(e){
        resultado.textContent = resultado.TextContent + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.TextContent + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.TextContent + "6";
    }
    sete.onclick = function(e){
        resultado.textContent = resultado.TextContent + "7";
    }
    oito.onclick = function(e){
        resultado.textContent = resultado.TextContent + "8";
    }
    nove.onclick = function(e){
        resultado.textContent = resultado.TextContent + "9";
    }
    zero.onclick = function(e){
        resultado.textContent = resultado.TextContent + "0";
    }
    reset.onclick = function(e){
        resetear();
    }
    soma.onclick = function(e){
        operandoa = resultado.textContent;
        operandoa = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operandoa = resultado.textContent;
        operandoa = "-";
        limpiar();
    }
    multiplicação.onclick = function(e){
        operandoa = resultado.textContent;
        operandoa = "*";
        limpiar();
    }
    division.onclick = function(e){
        operandoa = resultado.textContent;
        operandoa = "/";
    }
    igual.onclick = function(e){
        operandoa = resultado.textContent;
        resolver();
    }
} 
function limpiar(){
    igual.onclick = function(e){
    }

    function resetear(){
        resultado.textContent = "";
        operandoa = 0;
        operandoa = 0;
        operandoa = "";
    }
}

function resolver(){
    var res = 0;
    switch(operandoa){
        case "+":
            res = parseInt(operandoa) + parseInt(operandoa) + parseInt(operandoa);
            break;

        case "-":
            res = parseInt(operandoa) - parseInt(operandoa) - parseInt(operandoa);
            break;

        case "*":
            res = parseInt(operandoa) * parseInt(operandoa) * parseInt(operandoa);
            break;

        case "/":
            res = parseInt(operandoa) / parseInt(operandoa) / parseInt(operandoa);
            break;

    }
    resetear();
    resultado.textContent = res;
}