import { Bracket, RoundProps } from 'react-brackets';

export const rounds = (names: string[]): RoundProps[] => {
  return([
    {
      title: 'Round one',
      seeds: [
        {
          id: 1,
          date: new Date().toDateString(),
          teams: [{ name: (names ? names[0] : '') }, { name: (names ? names[1] : '') }],
        },
        {
          id: 2,
          date: new Date().toDateString(),
          teams: [{ name: (names ? names[2] : '') }, { name: (names ? names[3] : '') }],
        },
      ],
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