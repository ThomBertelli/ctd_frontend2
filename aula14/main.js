let inputUserNameReference = document.querySelector('input')

let submitButtonreference = document.querySelector('button')

let showDataDivReference = document.getElementById('showDataArea')


submitButtonreference.addEventListener('click',function(event){
    event.preventDefault()

    fetch (`https://api.github.com/users/${inputUserNameReference.value}`)
    .then(
        response => {
            response.json().then(
                userData => {
                    showDataDivReference.innerHTML += `
                    
                    <div>
                        <img src="${userData.avatar_url}">
                        <p>Id: ${userData.id} </p>
                        <p>Nome: ${userData.name} </p>
                        <p>Localização:${userData.location} </p>
                    </div>                
                    `
                }
            )
        }
    )


})