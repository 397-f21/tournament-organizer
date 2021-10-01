import { Bracket, RoundProps } from 'react-brackets';
import { shuffleList } from './team-shuffler';

export const rounds: RoundProps[] = [
  {
    title: 'Round one',
    seeds: [
      {
        id: 1,
        date: new Date().toDateString(),
        teams: [{ name: shuffleList[0] }, { name: shuffleList[1] }],
      },
      {
        id: 2,
        date: new Date().toDateString(),
        teams: [{ name: shuffleList[2] }, { name: shuffleList[3] }],
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
];