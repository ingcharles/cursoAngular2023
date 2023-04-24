// export function whatsMyType(argument: any): any{

// return argument;
// }
// const amIsString = whatsMyType('Hola Mundo');
// console.log(amIsString.toString());
// console.log(amIsString.split(' '));

//! funcion generica
export function whatsMyType<T>(argument: T): T {

    return argument;
}
// let amIsString = whatsMyType('Hola Mundo');
let amIsString = whatsMyType<string>('Hola Mundo');
let amIsNumber = whatsMyType<number>(100);
let amIsArray = whatsMyType<number[]>([1, 2, 3]);
console.log(amIsString.toString());
console.log(amIsString.split(' '));
console.log(amIsNumber.toFixed(3));
console.log(amIsArray.join('-'));//unir elementos de array con guion medio

