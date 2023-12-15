import { openai } from './api.js'

async function createCompletion() {
  try {
    const response = await openai.createCompletion({
      model: 'your-custom-model-name', //nome do modelo obtido no listFineTunes.js
      prompt: 'What is Lens Protocol',  //(???)
      max_tokens: 200   //(???)
    })
    if (response.data) {
      console.log('choices: ', response.data.choices)
    }
  } catch (err) {
    console.log('err: ', err)
  }
}

createCompletion()

//Essa função cria realmente o modelo