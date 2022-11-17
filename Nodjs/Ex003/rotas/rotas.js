const express = require('express')
const rotas = express.Router()

let cursosInfo = [
    {'curso':'NODEJS','info':'Curso de nodejs com Cfb-cursos'},
    {'curso':'JAVASCRIPT','info':'Curso de javascript com Cfb-cursos'},
    {'curso':'PHP','info':'curso de PHP'}

]
rotas.get('/',(req,res)=>{
    res.json({ola:'Seja bem vindo'})
})
rotas.get('/:cursosid',(req,res)=>{
    const curso = req.params.cursosid
    const cursoI = cursosInfo.find(i=>i.curso == curso)
    if(!cursoI){
        res.status(404).json({
           curso: 'Erro curso nao encotrado'}
        )
    }else{
        res.status(200).json(cursoI)
    }
})
module.exports = rotas