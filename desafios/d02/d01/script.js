function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        window.alert('Tudo ok!')
    }

}

function Limpar() {
    var fano = document.getElementById('txtano');
    var fmas = document.getElementById('mas');
    var ffem = document.getElementById('fem');
    
    fano.value = ""; // Limpa o campo de ano de nascimento
    fmas.checked = false; // Desmarca o sexo masculino
    ffem.checked = false; // Desmarca o sexo feminino
}
