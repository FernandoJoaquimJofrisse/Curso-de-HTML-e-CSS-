function enviar(){
    var nome = document.querySelector("input#txt1")
    var sobre = document.querySelector("input#txt2")
    var ano = document.querySelector('input#ano')
    var resu = document.getElementById('res')

    var ano = Number(ano.value)
    var an = new Date()
    var ano1 = an.getFullYear()
    var idade = ano1 - ano
    var nome = nome.value
    var sobre = sobre.value
    var nome1 = nome + sobre

    if(nome.length == 0 || sobre.length == 0 || ano.length < 0){
        alert('Dados incorretos')


    }else if(nome == 'Fernando'){
        document.write('Seja bem vindo Fernando')
        document.body.style.background = 'red'
    }


    resu.innerHTML = `Meu nome é <strong>${nome1}</strong> meu sobre-nome é
    <strong>${sobre}</strong> tenho <strong>${idade}</strong> anos de idade`
}
document.body.style.background = 'darkblue'
document.body.style.color = '#fff'
