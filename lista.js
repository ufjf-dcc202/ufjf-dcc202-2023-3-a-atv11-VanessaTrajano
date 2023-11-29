const lista = ["Um", "Dois", "Três"]

function getLista(){
    return lista
}

function limparLista(){
    lista.splice(0, 3)
}

function adicionaNaLista(novoItem){
    lista.push(novoItem)
}

export {getLista, limparLista, adicionaNaLista}