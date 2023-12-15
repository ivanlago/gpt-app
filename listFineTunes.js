import { openai } from './api.js'

async function listFineTunes() {
  try {
    const response = await openai.listFineTunes()
    console.log('data: ', response.data.data)
  } catch (err) {
    console.log('error:', err)
  }
}

listFineTunes()

//essa função verifica o status atual do modelo
//e após a conclusão será obtido o nome do modelo para ser utilizado no createCompletion.js => 