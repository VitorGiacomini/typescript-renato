"use strict";
// interface Curso{
//     titulo: string;
//     des: string;
//     ch: number;
//     maxAlunos: number;
// }
let curso3;
let curso4;
let curso5;
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
    titulo: 'ADM',
    des: 'Graduação',
    ch: 2500,
    maxAlunos: 50,
    status() {
        console.log('Em funcionamento!');
    },
};
curso5 = {
    titulo: 'CIÊNCIAS CONTABEIS',
    des: 'Graduação',
    ch: 6000,
    maxAlunos: 50,
    status() {
        console.log('Anulado!');
    },
};
console.log(curso3);
curso3.status();
