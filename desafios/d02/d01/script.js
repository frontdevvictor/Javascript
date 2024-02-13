function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var gênero = 'Indefinido'; // Inicializa com valor padrão
        if (fsex[0].checked) {
            gênero = 'Homem';
        } else if (fsex[1].checked) {
            gênero = 'Mulher';
        }
        res.innerHTML = `Detectando ${gênero} com ${idade} anos.`; // Utiliza template literals
    }
}

function Limpar() {
    var fano = document.getElementById('txtano');
    var masculinoCheckbox = document.getElementById('mas');
    var femininoCheckbox = document.getElementById('fem');
    
    fano.value = ""; // Limpa o campo de ano de nascimento
    masculinoCheckbox.checked = false; // Desmarca o sexo masculino
    femininoCheckbox.checked = false; // Desmarca o sexo feminino
}
