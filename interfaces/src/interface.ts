// interface Curso{
//     titulo: string;
//     des: string;
//     ch: number;
//     maxAlunos: number;
// }

// let curso3: Curso;
// let curso4: Curso;
// let curso5: Curso

// curso3 ={
//     titulo: 'TADS',
//     des: 'Graduação',
//     ch: 3000,
//     maxAlunos: 50
// }
// curso4 ={
//     titulo: 'ADM',
//     des: 'Graduação',
//     ch: 2500,
//     maxAlunos: 50
// }
// curso5 ={
//     titulo: 'CIÊNCIAS CONTABEIS',
//     des: 'Graduação',
//     ch: 6000,
//     maxAlunos: 50
// }
// console.log(curso3)
// console.log(curso4)
// console.log(curso5)


//------------------------------------//

// interface Curso{
//     titulo: string;
//     des: string;
//     ch: number;
//     maxAlunos: number;
//     status():void;
// }

// let curso3: Curso;
// let curso4: Curso;
// let curso5: Curso

// curso3 ={
//     titulo: 'TADS',
//     des: 'Graduação',
//     ch: 3000,
//     maxAlunos: 50,
//     status() {
//         console.log('Em funcionamento!');
//     },
// }
// curso4 ={
//     titulo: 'ADM',
//     des: 'Graduação',
//     ch: 2500,
//     maxAlunos: 50,
//     status() {
//         console.log('Em funcionamento!');
//     },
// }
// curso5 ={
//     titulo: 'CIÊNCIAS CONTABEIS',
//     des: 'Graduação',
//     ch: 6000,
//     maxAlunos: 50,
//     status() {
//         console.log('Anulado!');
//     },
// }
// console.log(curso3)
// curso3.status()

interface Curso{
    titulo: string;
    des: string;
    ch: number;
    maxAlunos: number;
    status():void;
}
interface CursoFic extends Curso{
    qtdMeses: number;
    presencial: boolean;
}

let curso3: Curso;
let curso4: CursoFic;


curso3 ={
    titulo: 'TADS',
    des: 'Graduação',
    ch: 3000,
    maxAlunos: 50,
    status() {
        console.log('Em funcionamento!');
    },
}
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
}

console.log(curso4)