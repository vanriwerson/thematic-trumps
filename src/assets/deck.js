import kipo from './deck_images/kipo.jpg';
import loba from './deck_images/loba.jpeg';
import mandu from './deck_images/mandu.jpeg';
import benson from './deck_images/benson.jpeg';
import dave from './deck_images/dave.jpeg';
import yumyan from './deck_images/yumyan.jpeg';
import scarlemagne from './deck_images/scarlemagne.jpeg';
import strongDave from './deck_images/strong-dave.jpeg';

const deck = [
  {
    id: '1A',
    name: 'Kipo Oak',
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
  {
    id: '3A',
    name: 'Mandu',
    strength: 20,
    agility: 50,
    intelligence: 20,
    charisma: 50,
    imgLink: mandu,
    isTrumpCard: false,
  },
  {
    id: '4A',
    name: 'Benson',
    strength: 30,
    agility: 40,
    intelligence: 50,
    charisma: 40,
    imgLink: benson,
    isTrumpCard: false,
  },
  {
    id: '5A',
    name: 'Dave',
    strength: 30,
    agility: 30,
    intelligence: 30,
    charisma: 40,
    imgLink: dave,
    isTrumpCard: false,
  },
  {
    id: '6A',
    name: 'Yumyan Pata-forte',
    strength: 70,
    agility: 50,
    intelligence: 30,
    charisma: 30,
    imgLink: yumyan,
    isTrumpCard: false,
  },
  {
    id: '7A',
    name: 'Scarlemagne (Hugo Oak)',
    strength: 50,
    agility: 50,
    intelligence: 70,
    charisma: 20,
    imgLink: scarlemagne,
    isTrumpCard: false,
  },
  {
    id: '8A',
    name: 'Dave (Forte)',
    strength: 80,
    agility: 70,
    intelligence: 30,
    charisma: 40,
    imgLink: strongDave,
    isTrumpCard: false,
  },
];

export default deck;