import Linguagem from "./modulos";
import { nomes, impressao } from "./modulos";

const lang = new Linguagem('Java');

impressao('A melhor linguagem de prog é? Resp: ' + lang.nome);

console.log(lang);
console.log(nomes);