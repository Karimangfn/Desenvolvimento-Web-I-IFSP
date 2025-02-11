function validaemail() {
    const regex = /\S+@gamerzone\.com.br/
    if (document.getElementById("emailcad").value == "") {
        alert("Preencha o campo Email GamerZone com o formato: @gamerzone.com.br");
        document.getElementById('botao1').click();
    }
    else if (regex.test(document.getElementById('emailcad').value) == false) {
        alert("Dominio de Email GamerZone Invalido! use o dominio do Site: @gamerzone.com.br")
        document.getElementById('botao1').click();
    }
    else if (regex.test(document.getElementById('emailcad').value) == true && document.getElementById("primeironome").value != "" 
        && document.getElementById("ultimonome").value != "" && document.getElementById("email").value != "" 
        && document.getElementById("estado").value !=     "" && (document.querySelector("#manha").checked == true 
        || document.querySelector("#tarde").checked == true || document.querySelector("#noite").checked == true 
        || document.querySelector("#total").checked == true) && document.getElementById("qtd").value != "" 
        && document.getElementById("experiencia").value != "" && document.querySelector("#termos").checked == true) {
        alert("Seu curriculo agora esta Cadastrado em nosso Banco de Dados! Entraremos em contato")
        document.getElementById('botao1').click();
    }
    else {
        document.getElementById('botao1').click();
    }
}