const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/',(req,res)=>{
    res.send('Ola mundo')
})
app.get('/b',(req,res)=>{
    res.json({b:'Meu aquivo de json'})
})
app.listen(port || 3000,()=>{console.log('Servidor ligado')})