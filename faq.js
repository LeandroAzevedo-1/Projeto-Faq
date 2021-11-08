/* Variável - Recebe algum valor, Funcções - Realiza ação do codigo, Condicionais realiza ação conforme uma condição EX if e else */



/* Buscar os itens da tela*/
const intensPerguntasERespostas = document.querySelectorAll('.item') /* Todas as teg do html, as 3 teg li */

/* Enternder que o item foi clicado */
intensPerguntasERespostas.forEach(function(item){
    item.addEventListener('click', function() {

        /* Verficar se a pergunta clicada esta ativa */
        const estaAtiva = item.classList.contains('ativo')
        
        /* Eu preciso fechar todas */
        intensPerguntasERespostas.forEach(function(item){
            item.classList.remove('ativo')
        })
        
        /* Se a pergunta não esta ativa  */
        if(!estaAtiva) {
            /* Abri a resposta atual */ 
            item.classList.add('ativo') /* Foi adcionado a classe no html */

        /* Se a pergunta estiver ativa */
        } else {
            // Desativar (Removeria a classe ativo)
            item.classList.remove('ativo')
        }         
    })      
})

