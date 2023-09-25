function validarFormulario() {
    const nome = document.getElementById("nome").value;
    const idade = parseInt(document.getElementById("idade").value);
    const pessoas = parseInt(document.getElementById("pessoas").value);



    const idadeMin = 18;
    const limitePorQuarto = 3;

    if (nome.split(" ").length < 2) {
        document.querySelector(".error1").style.display = "block";
        return false;
    } else {
        document.querySelector(".error1").style.display = "none";
    }

    if (idade < idadeMin) {
        document.querySelector(".error2").style.display = "block";
        return false;
    } else {
        document.querySelector(".error2").style.display = "none";
    }

    if (pessoas > limitePorQuarto) {
        document.querySelector(".error3").style.display = "block";
        return false;
    } else {
        document.querySelector(".error3").style.display = "none";
    }

    alert("Reserva solicitada, aguarde nosso contato !")

    return true;
}