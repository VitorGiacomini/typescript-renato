// function funcGenerica<T>(v: T): T{
//     return v;
// }

// function funcGenerica2<T,U>(v: T, r:U): U{
//     return r;
// }

// console.log(funcGenerica<number>(10))
// console.log(funcGenerica<string>('10'))
// console.log(funcGenerica<boolean>(false));
// console.log(funcGenerica2<number, string>(10, '10'));
// console.log(funcGenerica2<string, number>('10', 10));
// console.log(funcGenerica2<boolean, number>(false,10));


// class Generica<T>{
//     public valor: T;
//     constructor(valor:T){
//         this.valor = valor;
//     }
// }
// let gen = new Generica<number>(10);
// console.log(gen); 

function primeiroElemento<T>(array : T []): T | undefined{
    return array.length> 0 ? array [0] : undefined; 
}

function maiorArray<T, U>(array1 : T[], array2  : U[]) : T[]|U[]{
    return array1.length > array2.length ? array1  :  array2
}
//exemplo numeros
const numeros : number [] = [1, 2, 3, 4, 5]
console.log("Primeiro numero ", primeiroElemento(numeros))


//exemplo com strings

const palavras  : string[] = ["notebook", "arduino", "3Dprinter"]
console.log("Primeria palavra ", primeiroElemento(palavras))



