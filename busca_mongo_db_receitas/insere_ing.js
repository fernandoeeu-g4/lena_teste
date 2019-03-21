const ingredientes = [
  'ovos',
  'farinha',
  'nutella',
  'leite',
  'queijo',
  'açucar',
  'banana',
  'farinha de trigo',
  'cebola roxa',
  'laranja'
]


function gerador_ingredientes(times) {
  // array com ingredientes a ser retornado
  ingredientes_final = []

  // indice criado para pegar uma posição no array de ingredientes
  let pos_atual = 0;

  // Array com todas as posições que já foram escolhidas
  let posicoes_antigas = []

  for (let i = 0; i < times; i++) {

    // gera um numero aleatorio para buscar no array de ingredientes
    pos_atual = Math.floor(Math.random() * 10)

    // verifica se a posição gerada na linha 27 já foi gerada anteriormente
    while (posicoes_antigas.includes(pos_atual)) {
      // caso linha 30 seja true gera uma nova posicao
      pos_atual = Math.floor(Math.random() * 10)
    }

    // adiciona a posicao gerada no array de posicoes antigas
    posicoes_antigas.push(pos_atual)

    // adiciona o ingrediente no array de ingredientes final
    ingredientes_final.push(ingredientes[pos_atual])
  }
  // limpa o array de posicoes antigas
  posicoes_antigas = []

  // retorna o array de ingredientes final
  return ingredientes_final
}

// exporta a funcao
module.exports = gerador_ingredientes