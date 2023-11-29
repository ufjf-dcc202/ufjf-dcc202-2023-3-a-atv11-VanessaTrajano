const lista = ["Um", "Dois", "Três"]

function getLista(){
    return lista
}

function limparLista(){
    lista.splice(0, 3)
}

function adicionarNaLista(novoItem){
    lista.push(novoItem)
}

export {getLista, limparLista, adicionarNaLista}