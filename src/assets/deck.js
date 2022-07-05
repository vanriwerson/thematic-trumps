import kipo from './deck_images/kipo.jpg';
import loba from './deck_images/loba.jpeg';

const deck = [
  {
    id: '1A',
    name: 'Kipo',
    strength: 30,
    agility: 30,
    intelligence: 30,
    charisma: 50,
    imgLink: kipo,
    isTrumpCard: true,
  },
  {
    id: '2A',
    name: 'Loba',
    strength: 50,
    agility: 40,
    intelligence: 40,
    charisma: 30,
    imgLink: loba,
    isTrumpCard: false,
  },
];

export default deck;