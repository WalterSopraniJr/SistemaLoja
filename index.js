const produto = require('./produtos')
//const google = require('./funcoes')
const carrinhoCompra = []
const vendaDiaria = []
const vendaMensal = []

function addProdutoNome() {
    
    carrinhoCompra.push(carrinhoCompra)

    return carrinhoCompra
}



function customerInvoice(array, invoice) {

    let itemPesquisado = [];

    for (let i = 0; i < array.length; i++) {

        console.log(`Item atual no looping: ${array[i].nome}.`)

        if (array[i].nome == invoice) {
            console.log(`Match: ${array[i].nome}.`)
            console.log(`Item da lista do cliente: ${invoice}.`)

            itemPesquisado.push(array[i]);
            array[i].estoque--
            
        } 
    }
    return itemPesquisado;
}




carrinhoCompra.push(customerInvoice(produto, "Granola Crocante 500gr"))
console.log('Carrinho de compras: ', carrinhoCompra)
console.log(carrinhoCompra)
