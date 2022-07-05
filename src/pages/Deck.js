import React, { Component } from 'react';
import Card from '../components/Card';
import deck from '../assets/deck';

export default class Deck extends Component {
  render() {
    return(
      <div>
        <h1>Visualize o baralho Completo</h1>
        {
          deck.map(({ id, name, strength, agility, intelligence,
            charisma, imgLink, isTrumpCard }) => (
            <Card
              key={ id }
              name={ name }
              strength={ strength }
              agility={ agility }
              intelligence={ intelligence }
              charisma={ charisma }
              imgLink={ imgLink }
              isTrumpCard={ isTrumpCard }
            />
          ))
        }
      </div>
    );
  }
}
