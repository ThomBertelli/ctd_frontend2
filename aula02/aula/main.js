//exemplo de objeto

let user = {

    name: 'Carlos',
    age: 32,
    birthDate: '11/02/1989'

};

console.log(user);

//exemplo for in em um objeto
for( let detail in user){
    //pegando os dados dentro das chaves
    console.log(user[detail])
};

//exemplo prompt enviando a mensagem para o console

console.log(prompt());