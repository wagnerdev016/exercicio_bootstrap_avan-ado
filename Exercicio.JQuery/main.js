$(document).ready(function()  {

    $('form').on ('submit', function(e) {
        e.preventDefault();

        const novaTarefa = $('#nome-tarefa').val();
        const newItem =  $(`<li>${novaTarefa}</li>`).click(function() {
            $(this).css('text-decoration', 'line-through');
        });
        
        $(newItem).appendTo('ul');
        
        $('#nome-tarefa').val('');

    });
    
});


