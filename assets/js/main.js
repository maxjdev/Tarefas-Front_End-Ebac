$(document).ready(function() {
    $('#nome').mask('A', {
        translation: {
            'A': { pattern: /[A-Za-z ]/, recursive: true }
        },
        placeholder: 'Nome completo'
    });
    
    $('#tel').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            tel: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor insira seu nome',
            email: 'Por favor insira seu email',
            tel: 'Por favor insira seu telefone'
        },
        submitHandler: function(form) {
            console.log(form)
            form.reset();
            alert('Enviado com sucesso !')
        },
        invalidHandler: function(event, validador) {
            alert('Por favor complete o formulario')
        }
    })
})