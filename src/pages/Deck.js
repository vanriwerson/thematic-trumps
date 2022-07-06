import React, { Component } from 'react';
import Card from '../components/Card';
import deck from '../assets/deck';
import './Deck.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Deck extends Component {
  render() {
    return(
      <>
        <Header />
        <div className="deck-display">
          <h1 className="deck-display-title">Visualize o baralho Completo</h1>
          {
            deck.map(({ id, name, strength, agility, intelligence,
              charisma, imgLink, isTrumpCard }) => (
              <Card
                key={ id }
                id={ id }
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
        <Footer />
      </>
    );
  }
}
