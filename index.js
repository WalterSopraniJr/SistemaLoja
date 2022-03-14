const produto = require('./produtos')
let customerList = require('./customerList')
let carrinhoCompra = []

console.log("------------------------------------------------------------------------------------------")


//------------------Adiciona-Mercadoria-no-Estoque--------------------

function addProduto(array, abastecimento) {
  
    let itemComparado = [];

    for (let i = 0; i < array.length; i++) {
        iList = 0
        if (array[i].nome == abastecimento[iList].nome) {
            array[i].estoque = array[i].estoque + abastecimento[iList].qtd
            iList++
        } 
    }

        
    return itemComparado;
}


//-----------------Mercadoria-em-Lançamento-no-Estoque----------------

let produtoReposicao = [
    {
        nome: "Granola Crocante 500g",
        precoCompra: 4.50,
        qtd: 15
    }
]

addProduto(produto, produtoReposicao)
console.log("Lançando mercadorias no estoque:")
console.log(`Adicionado ${produtoReposicao[0].qtd} unidade(s) do item ${produtoReposicao[0].nome}`)
console.log("------------------------------------------------------------------------------------------")

//----------------Adiciona-lista-de-compras-no-Carrinho------------------

function customerInvoice(array, invoice) {

    let itemComparado = [];

    for (let i = 0; i < array.length; i++) {
        iList = 0
        if (array[i].nome == invoice[iList = 0].nome) {

            if(array[i].estoque >= invoice[iList = 0].qtd) {
                itemComparado.push(array[i]);
                array[i].estoque = array[i].estoque - invoice[iList = 0].qtd
            } else {
                console.log(`A quantidade no estoque não atende o item: ${invoice[iList = 0].nome}. Temos disponibilidade em ${array[i].estoque} ao invés de ${invoice[0].qtd}`)
            }
            iList++            
        } 
    }

        
    return itemComparado;
}



//----------------Resultado-da-Comparação-de-Compras---------------------------

carrinhoCompra.push(customerInvoice(produto, customerList))
console.log("Carrinho de compras do cliente:")
console.log(`Item: ${customerList[0].nome}`)
console.log(`Quantidade: ${customerList[0].qtd}`)
console.log("------------------------------------------------------------------------------------------")