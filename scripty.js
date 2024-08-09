$(document).ready(function() {
    // Evento de submissão do formulário
    $('#task-form').on('submit', function(e) {
        e.preventDefault(); // Evita que a página recarregue ao submeter o formulário
        
        // Obtém o valor do input
        const taskText = $('#task-input').val();
        
        // Adiciona uma nova tarefa à lista, se o campo não estiver vazio
        if (taskText.trim() !== "") {
            $('#task-list').append('<li>' + taskText + '</li>');
        }
        
        // Limpa o campo de input
        $('#task-input').val('');
    });
    
    // Evento de clique em um item da lista
    $('#task-list').on('click', 'li', function() {
        // Alterna a classe "completed" no item clicado
        $(this).toggleClass('completed');
    });
});
