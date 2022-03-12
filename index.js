const produto = require('./produtos')
//const google = require('./funcoes')
const carrinhoCompra = []
const vendaDiaria = []
const vendaMensal = []

function addProdutoNome() {
    
    carrinhoCompra.push(resultadoPesquisa)

    return carrinhoCompra
}



function customerInvoice(array, invoice) {

    let itemPesquisado = [];

    for (let i = 0; i < array.length; i++) {
        
        console.log(`Item atual no looping: ${array[i].nome}.`)
        if (array[i].nome == invoice) {
            console.log(`Item com nome iguao o da lista: ${array[i].nome}.`)
            console.log(`Item da lista do cliente: ${invoice}.`)
            itemPesquisado.push(array[i]);
            // if(array[i].estoque == invoice[i].qtd) {
            //     itemPesquisado.push(array[i]);
            //     array[i].estoque = array[i].estoque - invoice[i].qtd
            // } else {
            //     console.log(`A quantidade no estoque não atende o item: ${array[i].nome}. Temos disponibilidade em ${array[i].estoque} ao invés de ${invoice[i].qtd}`)
            // }
           
        } 
    }
    return itemPesquisado;
}


let resultadoPesquisa = []
let listaComprasCliente = [ "Granola Crocante 1Kg"]
    // {
    //     nome: "Granola Crocante 1Kg",
    //     qtd: 1
    // }
    // ]


resultadoPesquisa.push(customerInvoice(produto, listaComprasCliente))
console.log('Carrinho de compras: ', resultadoPesquisa)
console.log(resultadoPesquisa)
