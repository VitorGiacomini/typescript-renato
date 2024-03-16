"use strict";
// interface Curso{
//     titulo: string;
//     des: string;
//     ch: number;
//     maxAlunos: number;
// }
let curso3;
let curso4;
curso3 = {
    titulo: 'TADS',
    des: 'Graduação',
    ch: 3000,
    maxAlunos: 50,
    status() {
        console.log('Em funcionamento!');
    },
};
curso4 = {
    titulo: 'ingles',
    des: 'Curso rapido',
    ch: 80,
    maxAlunos: 10,
    status() {
        console.log('Em funcionamento!');
    },
    qtdMeses: 3,
    presencial: false
};
console.log(curso4);
