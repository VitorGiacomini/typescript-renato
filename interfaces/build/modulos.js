"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.impressao = exports.nomes = void 0;
const nomes = ['renato', 'Vitor', 'Gabriel'];
exports.nomes = nomes;
class Linguagem {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
function impressao(texto) {
    console.log(texto);
}
exports.impressao = impressao;
exports.default = Linguagem;
