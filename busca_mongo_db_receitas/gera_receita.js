const fs = require('fs')
const gerador_ingredientes = require('./insere_ing')
const gerador_categorias = require('./insere_cat')
let data = []
let id = 1
for (let i = 0; i < 10000; i++) {
  items = gerador_ingredientes(5)
  categorias = gerador_categorias(3)
  let new_item = {
    id: id,
    nome: `receita ${id}`,
    ing: items,
    categorias: categorias
  }
  data.push(new_item)
  id++
}


data = JSON.stringify(data)

// console.log(data)
fs.appendFile('./receitas_cat.json', data, 'utf-8',
  function (err) {
    if (err) {
      return console.log(err)
    }
    id++
    console.log("appended")
  })