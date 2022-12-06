const http = require("http")
const express = require("express")
const app = express()
const port = process.env.PORT

app.get('/',(req,res)=>{
    res.send('ola mundo')
})
app.get('/j',(req,res)=>{
    res.json({A:'Meu nome é Fernando Joaquim'})
})

app.listen(port || 3000,()=>{console.log('Servidor ligado')})
