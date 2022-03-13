const produto = require('./produtos')
const carrinhoCompra = []


//------------------Adiciona-Mercadoria-no-Estoque--------------------

function addProduto() {
    
    carrinhoCompra.push(carrinhoCompra)

    return carrinhoCompra
}








function customerInvoice(array, invoice) {

    let itemPesquisado = [];

    for (let i = 0; i < array.length; i++) {

        if (array[i].nome == invoice[0].nome) {

            if(array[i].estoque == invoice[0].qtd) {
                itemPesquisado.push(array[i]);
                array[i].estoque = array[i].estoque - invoice[0].qtd
            } else {
                console.log(`A quantidade no estoque não atende o item: ${invoice[0].nome}. Temos disponibilidade em ${array[i].estoque} ao invés de ${invoice[0].qtd}`)
            }

            
        } 
    }

        
    return itemPesquisado;
}

//-----------------Lista-de-Compras-do-Cliente---------------------------------

let customerList = [
    {
        nome: "Granola Crocante 500g",
        qtd: 1
    }
]

//----------------Resultado-da-Comparação-de-Compras---------------------------

carrinhoCompra.push(customerInvoice(produto, customerList))
console.log("Carrinho de compras:")
console.log(`Item: ${carrinhoCompra[0].nome}`)
console.log(`Quantidade: ${carrinhoCompra[0].qtd}`)

