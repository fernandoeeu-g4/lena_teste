const receitas = require('./receitas_com_cat')

const ingInput = ['banana', 'nutella', "ovos", "farinha", "cebola roxa"]

cont = 0
receitas.map(receita => {
  let tamanhoInput = ingInput.length
  let tamanhoReceita = receita.ing.length
  let aux = 0


  ingInput.forEach(function (ing) {
    if (receita.ing.includes(ing)) {
      aux++
    }
  })
  let porc = (aux * 100) / tamanhoReceita
  //console.log(porc)
  if (porc >= 20 && reiceita.categorias.includes("carnes")) {
    cont++
    console.log(receita.id)
  }

  // console.log('aux: ' + aux)
  // console.log('entrada: ' + tamanhoInput)
  // console.log('receita ing: ' + tamanhoReceita)
  // console.log('percentual: ' + porc.toFixed(2))



})

console.log(cont)