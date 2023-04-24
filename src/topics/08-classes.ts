// export class Person {
//     // public name: string | undefined;
//     // public name?: string;
//     // public address?: string;
//     // public name?: string;
//     // private address?: string;
//     //! contructor metodo especial de nuestra clases - es el primer método
//     // constructor() {
//     //     this.name = 'Fernando';
//     //     this.address = 'New York';
//     // }
//     constructor(public name: string, private address?: string) {
//         this.name = name;
//         this.address = address;
//     }

// }

// // const iroman = new Person();
// // console.log(iroman);
// // console.log(iroman.name);
// // console.log(iroman.address);
// // const iroman = new Person('Fernado','Opcional');
// // console.log(iroman);

// //!extender una clase es expandir su funcionalidad
// export class Hero extends Person {
//     constructor(public alterEgo: string, public age: number, public realName: string) {
//         //funcion especial que indica que tiene que llamar al constructor de la clase padre
//         super(realName, 'New York');
//     }
// }

// const iroman = new Hero('Iroman', 2, 'Tony');
// console.log(iroman);





export class Person {
    // public name: string | undefined;
    // public name?: string;
    // public address?: string;
    // public name?: string;
    // private address?: string;
    //! contructor metodo especial de nuestra clases - es el primer método
    // constructor() {
    //     this.name = 'Fernando';
    //     this.address = 'New York';
    // }
    constructor(public firstName: string,public lastName: string, private address: string = 'No address') {
        // this.name = name;
        // this.address = address;
    }

}

// const iroman = new Person();
// console.log(iroman);
// console.log(iroman.name);
// console.log(iroman.address);
// const iroman = new Person('Fernado','Opcional');
// console.log(iroman);

//!extender una clase es expandir su funcionalidad
//el nombre del tataranieto de su hermano
export class Hero {
    //composicion de herencia
    //public person = Person;

    constructor(public alterEgo: string, public age: number, public realName: string, public person: Person) {
        //funcion especial que indica que tiene que llamar al constructor de la clase padre
       // this.person = new Person(realName);
    }
}
const tony = new Person('Tony','Start','New York');
const iroman = new Hero('Iroman', 2, 'Tony',tony);
console.log(iroman);


