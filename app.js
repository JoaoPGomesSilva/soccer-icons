function pesquisar() {
    //Obtem a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada 
    if(!campoPesquisa){
        section.innerHTML ="<p>Nada foi encontrado. Você precisa digitar o nome de algum Jogador</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicia uma string vazia para armazenar os resultados
    let resultados = "";
    let nome = "";
    let descricao = "";

    // para cada dado dentro da lista de dados
    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        //se titulo includes campoPesquisa
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || dado.nacionalidade.includes(campoPesquisa)) {
        //cria um novo elemento

            resultados += `
        <div class="item-resultado">
        <p class="descricao-meta">Nacionalidade: ${dado.nacionalidade} </p>
        <p class="descricao-meta">${dado.posicao}</p>
            <h2>
                <a href="${dado.link}" target="_blank">${dado.nome}</a> 
             </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <p class="descricao-meta">${dado.titulos}</p>
        <p class="descricao-meta">${"Falecimento: " + dado.falecimento}, ${dado.idade} anos </p>
                <a href="${dado.link}" target="_blank">Mais Informações</a>
        </div>
        `;
        }
    }

    if(!resultados){
        resultados = "<p>Nada foi Encontrado.</p>"
    }
    //Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados
}