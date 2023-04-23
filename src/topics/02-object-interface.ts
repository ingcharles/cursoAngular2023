export{};
let skill = ['B', 'Counter','H', true,123];
// let skills: string[] = ['B', 'Counter','H'];
const skills: string[] = ['B', 'Counter','H'];
interface Character{
    name: string;
    hp:number,
    skill:string[],
    home?:string
}
// const stider = {name:'a',hp:'b',skill:'c'};
// const stider : Character = {
//     name: 'a', hp: 100, skill: ['a', 'b'],
//     home: ""
// };

const stider : Character = {
    name: 'a', hp: 100, skill: ['a', 'b']

};

stider.hp =400;
stider.skill = ['c', 'f'];

console.table(stider);