export{};
/*
    ===== Código de TypeScript =====
*/

// interface SuperHero {

//     name: string,
//     age: number,
//     address: any,
//     showAddress: () => string
// }
// interface SuperHero {
//     name: string,
//     age: number,
//     address: {
//         calle: string,
//         pais: string,
//         ciudad: string
//     },
//     // showAddress(): string;
//     showAddress: () => string
// }

interface SuperHero {
    name: string;
    age: number;
    address: Address;
    // showAddress(): string;
    showAddress: () => string;
}

interface Address{
    street: string;
    country: string;
    city: string;
}
const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St -',
        country: 'USA -',
        city: 'NY -'
    },
    showAddress():string {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address:string = superHeroe.showAddress();
console.log( address );
