document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-buscar-cep').addEventListener('click', function() {
        const xhttp = new XMLHttpRequest();
        const cep = document.getElementById('cep').value;
        const endpoint= `https://viacep.com.br/ws/${}/json`;

        xhttp.open('GET', endpoint);
        xhttp.send();
    })
})