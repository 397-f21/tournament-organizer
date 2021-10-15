import { Bracket, RoundProps } from 'react-brackets';
import { calculatePower } from './calculation.js'

export const rounds = (names: string[]): RoundProps[] => {
let seeding = [];
const n = calculatePower(names.length);
let roundnum = Math.log2(n);

let seed = 0;
let seeding1 = [];
let idCount = 1;
for (let x = 0; x < names.length/2; x++){
  let bracketSegment = {id: idCount, 
                        //date: new Date().toDateString(), 
                        teams: [{ name: (names ? names[seed] : '')}, { name: (names ? names[seed + 1] : '')}]}
  seeding1[idCount - 1] = bracketSegment;
  seed += 2;
  idCount += 1;
}
seeding.push(seeding1);

for (let i=1; i< roundnum; i++) {
  let seeding2 = [];
  for (let y=0; y < names.length/ (Math.pow(2, i+1)); y++) {
    let bracketSegment = {id: idCount,
                      teams: []    }
    seeding2[y] = bracketSegment;
    idCount += 1;
  }
  seeding.push(seeding2);
}
  

  seeding.map((element, index) => {
    const dict = {
      'title': 'Round ' + String(index),
      'seeds': element,
    }
    return dict
    })

  return(seeding.map((element, index) => {
    const dict = {
      'title': 'Round ' + String(index + 1),
      'seeds': element,
    }
    return dict
    }));
};