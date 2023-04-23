export{};

function addNumber (a:any, b:number):any {
  
    return a +b
}
const result: any = addNumber(1,2);
console.log({result});

const addNumerbsArrow  = (a:number, b:number):number =>{
     return a +b;
}
const result2: any = addNumerbsArrow(1,2);
console.log({result2});

const addNumerbsArrow2  = (a:number, b:number):string =>{
    return `${a +b}`;
}
const result3: string = addNumerbsArrow2(1,2);
console.log({result3});

function multiply (firstNumber: number, secondNumber?: number, base: number = 2):number {
    return firstNumber *  base;
}
const result4: number = multiply(5);
console.log({result4});

interface Character {
name: string,
hp: number,
showHp: () => void
}
const healCharacter = (character: Character, amount: number) => {
    character.hp  += amount;

}

const strider : Character ={
    name : 'Striders',
    hp : 50,
    showHp () {
        console.log(`Puntos de vida: ${this.hp}`);
    }
}
healCharacter(strider,10);
healCharacter(strider,50);
strider.showHp();



