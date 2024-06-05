function redirecionar() {
    if (document.getElementById('estudante').checked) {
        window.location.href = "tela_estudante.html";
    }else if (document.getElementById('biblio').checked) {
        window.location.href = "tela_bibliotecaria.html";
    }else {
        alert("por favor, selecione a opção.");
    }
}

function voltar() {
    window.location.href = "login.html";
}