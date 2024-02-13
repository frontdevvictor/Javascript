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
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            gênero = 'Homem';
            if (idade >=0 && idade < 10){
                // Criança
                img.setAttribute('src', 'imagens/bebê_homem.png');
            } else if (idade >= 10 && idade < 21){
                // Jovem
                img.setAttribute('src', 'imagens/Jovem_homem.png' );
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'imagens/Homem_adulto.png');
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso_homem.png');
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher';
            if (idade >=0 && idade < 10){
                // Criança
                img.setAttribute('src', 'imagens/bebê_mulher.png');
            } else if (idade >= 10 && idade < 21){
                // Jovem
                img.setAttribute('src', 'imagens/jovem_mulher.png');
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'imagens/Mulher_adulta.png');
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idosa_mulher.png');
            }
        }   
        res.innerHTML = `Detectando ${gênero} com ${idade} anos.`;
        res.appendChild(img);
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
