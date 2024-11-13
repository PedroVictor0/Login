const butao = document.getElementById("login"); // pegando o botão com id ("login")

function verificacao(campo1, campo2) { // criando uma função para validar os campos de textos
    if (!campo1 || !campo2) {
        alert("Preencha todos os campos"); // caso o campo não esteja preenchido, vai aparecer essa mensagem
    } else {
        window.location.href = "indexDois.html"
        // caso os campos estejam preenchidos, ele vai redirecionar o usuario para essa pagina indicada no link acima
    }
}

butao.addEventListener("click", function(event) { // criando um evento para quando o usuario apertar no botão, esse evento ser disparado
    const usuario = document.getElementById("usuario").value.trim(); // pegando o valor(O que o usuario digitar será o valor), do input cujo id é "usuario"
    const senha = document.getElementById("senha").value.trim(); // pegando o valor(O que o usuario digitar será o valor), do input cujo id é "senha"
    event.preventDefault() // fazendo com que o botão não tenha a função padrão dele, que é recarregar a pagina ao aperta-lo
    verificacao(usuario, senha); // chamando a função de validação e passando como parametro as const que armazenam o valor do input
});