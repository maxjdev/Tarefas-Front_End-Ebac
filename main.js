$(document).ready(function() {
    $(`#carousel-images`).slick({
        autoplay: true,
    });
    $(`.menu-hamburguer`).click(function() {
        $(`nav`).slideToggle();
    });
    $(`.lista-veiculos button`).click(function() {
        const destino = $(`#contato`);
        const nomeVeiculo = $(this).parent().find(`h3`).text();
        $(`#veiculoDeInteresse`).val(nomeVeiculo);

        $(`html`).animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
    $(`#cpf`).mask(`000.000.000-00`, {
        placeholder: `000.000.000-00`
    });
    $(`#cep`).mask(`00000-000`, {
        placeholder: `00000-000`
    });
    $(`#telefone`).mask(`(00) 00000-0000`, {
        placeholder: `(00) 00000-0000`
    });
    $(`form`).validate({
        rules: {
            nome: {
                required: true
            },
            cpf: {
                required: true
            },
            telefone: {
                required: true
            },
            cep: {
                required: true
            },
            endereço: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            veiculoDeInteresse: {
                required:false
            },
            mensagem: {
                required: false
            }
        },
        messages: {
            nome: `Por favor insira seu nome completo`,
            cpf: `Por favor digite um CPF valido`,
            telefone: `Por favor digite seu telefone / celular`,
            cep: `Por favor digite o CEP da sua rua`,
            endereço: `Por favor escreva seu endereço: rua, numero - cidade`
        },
        submitHandler: function(form, e) {
            e.preventDefault();
            alert(`Sua proposta de interesse foi enviada, entraremos em contato com você !`)
            $(nome).val(``);
            $(cpf).val(``);
            $(telefone).val(``);
            $(cep).val(``);
            $(endereço).val(``);
            $(email).val(``);
            $(veiculoDeInteresse).val(``);
            $(mensagem).val(``);
        },
        invalidHandler: function(event, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    });
});
