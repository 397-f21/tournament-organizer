import { Bracket, RoundProps } from 'react-brackets';

export const rounds = (names: string[]): RoundProps[] => {
  let seed = 0;
  let seeding = []
  let idCount = 1;
  for (let x = 0; x < names.length/2; x++){
    let bracketSegment = {id: idCount, 
                          date: new Date().toDateString(), 
                          teams: [{ name: (names ? names[seed] : '')}, { name: (names ? names[seed + 1] : '')}]}
    seeding[idCount - 1] = bracketSegment;
    seed += 2;
    idCount += 1;
  }
  return([
    {
      title: 'Round one',
      seeds: seeding,
      // seeds: [
      //   {
      //     id: 1,
      //     date: new Date().toDateString(),
      //     teams: [{ name: (names ? names[0] : '') }, { name: (names ? names[1] : '') }],
      //   },
      //   {
      //     id: 2,
      //     date: new Date().toDateString(),
      //     teams: [{ name: (names ? names[2] : '') }, { name: (names ? names[3] : '') }],
      //   },
      // ],
    },
    {
      title: 'Round two',
      seeds: [
        {
          id: 3,
          date: new Date().toDateString(),
          // teams: [{ name: 'Team A' }, { name: 'Team C' }],
        },
      ],
    },
])};