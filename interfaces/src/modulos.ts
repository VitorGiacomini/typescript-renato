const nomes = ['renato', 'Vitor', 'Gabriel'];

class Linguagem{
    public nome: string;
    constructor(nome: string){
        this.nome = nome;
    }
}

function impressao(texto: string){
    console.log(texto);
}

export default Linguagem;
export {nomes, impressao};