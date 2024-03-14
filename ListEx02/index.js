//Importando express
const express = require('express')
const app = express()

//Express usando o EJS como View Engine
app.set('view engine', 'ejs')

//Rota
app.get('/', (require,response)=>{
    response.render('index' ,{ titulo : 'Página 01', mensagem : 'Primeira Página'})
} )
app.get('/p02', (require,response)=>{
    response.render('paginadois', { titulo : 'Página 02', mensagem : 'Segunda Página'})
} )
app.get('/p03', (require,response)=>{
    response.render('paginatres', { titulo: 'Página 03', mensagem : 'Terceira Página'})
} )

const port = 3000
app.listen(port, ()=> {console.log(`Servidor rodando em http://localhost:${port}`)})