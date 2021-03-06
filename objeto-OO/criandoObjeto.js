const { times } = require("lodash")

// usando notação literal
const obj1 = {}
console.log(obj1)

//objeto em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Função construtoras
function Produto(nome, preco, desc) {
    this.nome = nome //tornando publica
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta',7.99, 0.15)
const p2 = new Produto('Notbook', 2998.99, 0.25)

console.log(p1, p2)