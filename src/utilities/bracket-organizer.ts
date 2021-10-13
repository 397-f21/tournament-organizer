import { Bracket, RoundProps } from 'react-brackets';

export const rounds = (names: string[]): RoundProps[] => {
  let seed = 0;
  let seeding = [];
  let idCount = 1;
  for (let x = 0; x < names.length/2; x++){
    let bracketSegment = {id: idCount, 
                          //date: new Date().toDateString(), 
                          teams: [{ name: (names ? names[seed] : '')}, { name: (names ? names[seed + 1] : '')}]}
    seeding[idCount - 1] = bracketSegment;
    seed += 2;
    idCount += 1;
  }

  let seeding2 = [];
  for (let y=0; y < names.length/4; y++) {
    let bracketSegment = {id: idCount,
                      teams: []    }
    seeding2[y] = bracketSegment;
    idCount += 1;
  }
  return([
    {
      title: 'Round one',
      seeds: seeding,
    },
    {
      title: 'Round two',
      seeds: seeding2,
    },
])};