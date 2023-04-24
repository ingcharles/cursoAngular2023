export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'John'
}
const passenger2: Passenger = {
    name: 'Mary',
    children: ['John', 'Lily']
}

const returnChildrenNumber = (passenger: Passenger): number => {
    const howManyChildren = passenger.children?.length || 0;
    //siempre que viene un children se pone !
    // if(!passenger.children) {
    //     console.log(5)
    //     return 5;
    // }
    // const howManyChildren = passenger.children!.length;
    console.log(passenger.name, howManyChildren);
    return howManyChildren;
}

returnChildrenNumber(passenger2);
