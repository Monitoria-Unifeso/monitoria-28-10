//constante que irá guardar nossos dados de usuários.
const usuarios = [];


function registrarUsuario() {
    //Pega os valores dos inputs pelos id's que definimos
    const nomeInput = document.getElementById("nome");
    const idadeInput = document.getElementById("idade");

    const nome = nomeInput.value;
    const idade = idadeInput.value;

    //valida se nome e idade não são vazio, undefined ou nulos
    if (nome && idade) {
        //cria um objeto de usuário
        const usuario = {
            nome: nome,
            idade: idade
        };
        //adiciona o usuario a nossa lista de usuarios
        usuarios.push(usuario);

        //chama a funcao que atuliza nossa lista
        atualizarListaUsuarios();

        limparCamposFormularioUsuario();
    }
}

function limparCamposFormularioUsuario() {
    const nomeInput = document.getElementById("nome");
    const idadeInput = document.getElementById("idade");

    nomeInput.value = '';
    idadeInput.value = '';
}


//Funcao que preenche nossa lista de usuarios cadastrados
function atualizarListaUsuarios() {
    //pega a referencia por id do nosso elemento ul quef oi criado no HTML 
    const userListElement = document.getElementById("user-list");

    //limpa o html já existente dentro o ul ("Remove os li")
    userListElement.innerHTML = '';

    //cria um novo li para cada usuário
    for (const usuario of usuarios) {
        const li = document.createElement("li");

        let elementoNome =  gerarConteudoLinha("Nome", usuario.nome)
        li.appendChild(elementoNome);
        
        let elementoIdade =  gerarConteudoLinha("Idade", usuario.idade)
        li.appendChild(elementoIdade);

        userListElement.appendChild(li);

        // também poderia ser feito de forma mais simples:
        // const li = document.createElement("li");
        // li.textContent = `Nome: ${usuario.nome}, Idade: ${usuario.idade}`;
        // userListElement.appendChild(li);
    }


    //Como estamos usando um padráo de "descricao: valor" podemos separar numa função para simplificar nosso código.
    function gerarConteudoLinha(descricao, valor){
        //gera um elemento para receber o texto
        let elemento = document.createElement("span");

        //adiciona a classe css .texto
        elemento.classList.add("texto"); 
        
        //gera um elemento para receber a descricao
        let elementoDescricao = document.createElement("span");

        //insere a descricao formatada
        elementoDescricao.textContent = `${descricao}: `;

         //adiciona a classe css .descricao
        elementoDescricao.classList.add("descricao"); 

        //gera um elemento para receber o valor
        let elementoValor = document.createElement("span");

        //insere o valor formatado
        elementoValor.textContent = valor;

        //adiciona a classe css .valor
        elementoValor.classList.add("valor");  

        //insere o elemento de descricao dentro do elemento de texto
        elemento.appendChild(elementoDescricao);
        //insere o elemento de valor dentro do elemento de texto
        elemento.appendChild(elementoValor);
        
        //retorna o elemento de texto fo 
        return elemento
    }
}




