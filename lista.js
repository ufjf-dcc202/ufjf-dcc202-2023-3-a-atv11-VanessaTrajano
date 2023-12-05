const lista = ["Um", "Dois", "Três"]

function getLista(){
    return lista
}

function limpaLista(){
    lista.splice(0)
}

function adicionaNaLista(novoItem){
    lista.push(novoItem)
}

function removeDaLista(indice){
    lista.splice(indice, 1)
}

export {getLista, limpaLista, adicionaNaLista, removeDaLista}