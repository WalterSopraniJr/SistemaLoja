const produto = require('./produtos')
//const google = require('./funcoes')
const carrinhoCompra = []
const vendaDiaria = []
const vendaMensal = []

function addProdutoNome() {
    
    carrinhoCompra.push(resultadoPesquisa)

    return carrinhoCompra
}



function googleLista(array, listaCompras) {

    let itemPesquisado = [];

    for (let i = 0; i < array.length; i++) {

        if (array[i].nome == listaCompras) {
            itemPesquisado.push(array[i]);

            
        } 
    }
    return itemPesquisado;
}


let resultadoPesquisa = []
let listaComprasCliente = "Granola Crocante 1Kg"


resultadoPesquisa.push(googleLista(produto, listaComprasCliente))
console.log('Resultado da busca: ', resultadoPesquisa)
