class Pessoa{
    constructor(pnome){
        this.nome = pnome
    }
}
let p1 = new Pessoa("Fernando")
let p2 = new Pessoa("Maria")
let p3 = new Pessoa("Mateus")


document.write(`<h1 style="color: blue;">${p1.nome}</h1> <br/>`)
document.write(`<h1>${p2.nome}</h1> <br/>`)
document.write(`<h1>${p3.nome}</h1> <br/>`)