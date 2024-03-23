"use strict";
// let nums = [1, 2, 3, 4];
// let [a, b, c, d] = nums;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// let cao = {
// 	raca: 'Fila',
// 	idade: 2,
// 	porte: 'grande',
// };
// let { raca, idade, porte } = cao;
// console.log(raca);
// console.log(idade);
// console.log(porte);
// let [n1, n2, ...n3] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(n1)
// console.log(n2)
// console.log(n3)
// const marcas = () =>{
//     return ["Kingston", "Dell", "Apple"]
// }
// let [m1, m2, m3] = marcas()
// console.log(m1)
// console.log(m2)
// console.log(m3)
let texto = "Aula de Linguagem de Programação 2";
let [...t] = texto.split(" ");
console.log(t);
