
let showDataDivReference = document.querySelector('.card')

let buttonRandonReference = document.querySelector('#random')


buttonRandonReference.addEventListener('click', function(event){
    event.preventDefault()

    
    fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        
        let resultObject = data.results[0]
        renderizarDadosUsuario(resultObject)
        
        console.log(resultObject)
    });

})



function renderizarDadosUsuario(dados) {
    showDataDivReference.innerHTML = `
                    <div>
                        <img src="${dados.picture.large}">
                    
                        <p>Nome Completo: ${dados.name.first} ${dados.name.last} </p>
                        <p>Email:${dados.email} </p>
                    </div>                
                    `
}


/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.