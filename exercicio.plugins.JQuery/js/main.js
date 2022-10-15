$(document).ready(function(){

    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    })

    $('#cep').mask('00000-000',{
        placeholder:'00000-000'
    });

    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required:true
            },
            endereco: {
                required:true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Insira seu nome completo',
            email: 'Insira seu Email',
            telefone: 'Insira seu telefone',
            cpf: 'Insira seu CPF corretamente',
            endereco: 'Insira seu endereço',
            cep: 'Insira seu CEP'
        },
        submitHandler: function(form) {
            console.log(form)
            $('input').val('');
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
            
    });

});
