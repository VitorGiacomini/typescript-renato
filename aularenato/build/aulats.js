"use strict";
// let nome: string = "Vitor Giacomini";
// console.log(`Hello World ${nome}`);
// //tipos diferentes
// let dia : string | number;
// dia = '23/02';
// console.log(typeof(dia) + ` ${dia}`);
// dia = 23.02;
// console.log(typeof(dia) + ` ${dia}`);
// //array
// let numeros:number[] = [1, 2, 3];
// let numeros2:Array<number> = [1, 2, 3];
// let numeros3:ReadonlyArray<number> = [1, 2, 3];
// //adicionar numeros
// //ao final
// numeros.push(4);
// console.log(numeros);
// //no começo
// numeros.unshift(0);
// console.log(numeros)
// //Remove ultimo
// numeros.pop();
// //remove o primeiro 
// numeros.shift();
// let pessoa: object = { 
//     nome: "Vitor",
//     idade: 29,
// }
// console.log(typeof(pessoa));
// console.log(pessoa);
// let pessoa = { 
//     nome: "Manoel",
//     idade: 29,
// }
// console.log(typeof(pessoa));
// console.log(pessoa);
//Funções
// let pessoa = { 
//     nome: "Vitor",
//     idade: 29,
//     falar: () => {console.log("Olá")}
// }
// console.log(typeof(pessoa));
// console.log(pessoa);
// pessoa.falar();
//Funções com parametro
// let pessoa = {
//     nome: "Vitor",
//     idade: 29,
//     falar: () => { console.log("Olá"); },
//     falarCom: (p: string) => { console.log("Olá, " + p);}
// };
// console.log(typeof (pessoa));
// console.log(pessoa);
// pessoa.falarCom('Vitor');
//Type Asssertion
// let nvalor: number;
// let svalor: number;
// let uvalor: unknown;
// uvalor = 5;
// nvalor = <number>uvalor;
// console.log(typeof(uvalor));
// console.log(nvalor);
// let nvalor: number;
// let svalor: string;
// let uvalor: unknown;
// uvalor = 5;
// svalor = '20';
// nvalor = <number><unknown>svalor;
// svalor = <string>uvalor;
// svalor += 10;
// console.log(nvalor);
// console.log(svalor);
//Type Cast
// let nvalor: number;
// let svalor: string;
// let uvalor: unknown;
// nvalor = 5;
// svalor = nvalor.toString();
// console.log(svalor);
// svalor = '10';
// nvalor = Number.parseInt(svalor);
// console.log(nvalor);
//Funçoes
//sem parametros
function olaMundo() {
    console.log("ola mundo");
}
//com parametros
function login(user, pass) {
    console.log('Usuario:' + user);
    console.log('Senha:' + pass);
}
olaMundo();
login("root", "123");
