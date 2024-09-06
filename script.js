function pesquisar(){
    //obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let resultados = "";
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == ""){
        section.innerHTML = "<p>Nenhum filme ou série encontrado. Você precisa digitar algo.</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados){
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //cria um novo elemento
            resultados += `
            <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p>Plataforma: ${dado.plataforma}</p>
            <p class="descricao-meta"><a href="${dado.link}" target="_blank">${dado.titulo} </a>${dado.descricao}</p>
            </div>`;
        } 
            
    }

    if (!resultados) {
        resultados = "<p>Nenhum filme ou série encontrado</p>"

    }
section.innerHTML = resultados;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('pesquisar').click();
    }
});

