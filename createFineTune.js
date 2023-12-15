import { openai } from './api.js'

async function createFineTune() {
  try {
    const response = await openai.createFineTune({
      training_file: 'your-file-id',   //campo será preenchido com o file id retornado do uploadFile.js
      model: 'davinci'
    })
    console.log('response: ', response)
  } catch (err) {
    console.log('error: ', err.response.data.error)
  }
}

createFineTune()

// essa função cria o modelo com fine Tune