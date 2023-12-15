import { openai } from './api.js'
import fs from 'fs'

async function upload() {
  try {
    const response = await openai.createFile(
      fs.createReadStream('./data.jsonl'),
      "fine-tune"
    );
    console.log('File ID: ', response.data.id)
  } catch (err) {
    console.log('err: ', err)
  }
}

upload()

//retorna o file ID que será usado no createFineTune.js => "your file id"

//ERRO NO "Configuration" importado no 'openai' (????)