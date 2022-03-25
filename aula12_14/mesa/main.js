window.onload = function (){
    let commentsObject = JSON.parse( localStorage.getItem('comments') )

    for(let com of commentsObject){
        showComentsReference.innerHTML += `
    <p>${com.comment}</p>
        `}
}

let submitButtonReference = document.querySelector('button')

let showComentsReference = document.querySelector('#showComents')

let comments =[] 

submitButtonReference.addEventListener('click',function(event){
        
    event.preventDefault()
    
    let comentsTextReferece = document.querySelector('#comentsArea')
    
    comments.unshift({
        comment: comentsTextReferece.value
    })
        
    localStorage.setItem('comments', JSON.stringify(comments))    
    
    let temp = showComentsReference.innerHTML, novo = `
    <p>${comentsTextReferece.value}</p>
        `
    temp = novo + temp

    showComentsReference.innerHTML = temp


    comentsTextReferece.value = " "

})





