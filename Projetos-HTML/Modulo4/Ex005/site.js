function enviar(){
    var n1 = document.querySelector('input#txt1')
    var n2 = document.querySelector('input#txt2')
    var n3 = document.querySelector('input#txt3')
    var dt = Number(n3.value)
    var data = new Date()
    var ano = data.getFullYear() - dt
    var resu = document.getElementById('res')
    var n1 = n1.value
    var n2 = n2.value
    n1.Color = '#fff'
    resu.innerHTML = `O meu nome é <strong>${n1}</strong> e o meu sobrinome é
    <strong>${n2}</strong> e tenho <strong>${ano}</strong> anos de idade`
}