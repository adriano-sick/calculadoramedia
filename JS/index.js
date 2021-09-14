// Adriano Siqueira - 9/13/2021

function calcular() {
    let botao = document.getElementById("calcular");
    let result = document.getElementById("result");
    let mediaTXT = document.getElementById("media");
    let statusTXT = document.getElementById("status");

    let b1 = parseFloat(document.getElementById("primeiro").value);
    let b2 = parseFloat(document.getElementById("segundo").value);
    let b3 = parseFloat(document.getElementById("terceiro").value);
    let b4 = parseFloat(document.getElementById("quarto").value);

    var media = ((b1 + b2 + b3 + b4) / 4).toFixed(1);

    result.style.display = "block";    

    if(b1 > 10 || b1 < 0 || b2 > 10 || b2 < 0 || b3 > 10 || b3 < 0 || b4 > 10 || b4 < 0 || media == "NaN") {
        statusTXT.innerHTML = "Insira valores validos!";
        mediaTXT.innerHTML = "";
    } else {
        if (media > 5) {
            mediaTXT.innerHTML = "Sua media e: " + media;
            statusTXT.innerHTML = "Parabens! Voce Foi Aprovado!"; 
            result.style.color = "lightgreen";
    
        } else {
            mediaTXT.innerHTML = "Sua media e: " + media;
            statusTXT.innerHTML = "Que pena, voce foi reprovado!";
            result.style.color = "red";
        }
    }
    
}