//Importa dependencia
const express = require('express')
const path = require('path')

//Iniciando o express
const server = express()
server
//Utilizando os arquivos estaticos
.use(express.static('public'))

//Criar uma rota
.get('/', (request, response) =>{

  return response.sendFile(path.join(__dirname + 'views', 'index.html'))
})


//Ligar o servidor
server.listen(5000)