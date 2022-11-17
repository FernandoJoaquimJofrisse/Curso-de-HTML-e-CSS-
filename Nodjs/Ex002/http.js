const http = require('http')
const port = process.env.PORT
const host = '127.0.0.1'
const fs = require('fs')

const servidor = http.createServer((req,res)=>{
    fs.readFile('site.html',(err,arquivo)=>{
        res.write(arquivo)
        return res.end()
    })



})
servidor.listen(port || 8080,()=>{console.log('servidor loga')})