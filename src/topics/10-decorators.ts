//funciones especiales que se adjuntas a diferentes objetos
// function classDecorator<T extenders {new (..)}>(){
//     constructor: T(){

//     }
// }
function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {

    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override';

    }
}



@classDecorator
export class SuperClass {
    // @classDecorator
    public myProperty: string = 'Abc123';
    // @classDecorator
    print() {
        console.log('Hola Mundo');
    }
}
//definicion de la clase
console.log(SuperClass);
//instancia de la clase
const myClass = new SuperClass();
console.log(myClass);