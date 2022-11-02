const express = require('express')
const rotas = require('./rotas/rotas')
const port = process.env.PORT
const app = express()

app.use('/',rotas)

app.get('*',(req,res)=>{
    res.send('CFB_CURSOS')
})
app.listen(port || 3000,()=>{console.log('Servidor rodando')})