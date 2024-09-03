//função dados
function dados() {

    //váriavel dados
    const dados = [
        //dados que estão dento da variável 
        { id: 1, login: "renata", password: "renata21", email: "renata@gmail.com" },
        { id: 2, login: "re21", password: "re21", email: "re21@gmail.com" },
        { id: 3, login: "r21", password: "r21", email: "r21@gmail.com" }


    ]
    //retorna os dados para que apareçam...
    return dados
}

const users = dados()

//console.log("O seu e-mail é: " + users[0].email  + "\nSua senha é: " + users[0].password)



function login() {
    //  é para encontrar o dado mais rápido
    let login = document.querySelector("#login").value
    let senha = document.querySelector("#password").value

    for (let i = 0; i < users.length; i++) {
        //Condição para confirmação dos dados 
        if (login == users[i].login && senha == users[i].password) {
            console.log("Usuário logado")
            alert("Você logou")
        }
    }
}