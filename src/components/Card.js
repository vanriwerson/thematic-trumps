import React, { Component } from 'react';
// import kipo from '../assets/deck_images/kipo.jpg';
import deck from '../assets/deck';

export default class Card extends Component {
  render() {
    return(
      <div>
        {deck.map((card) => (
          <img src={ card.imgLink } alt='kipo'/>
        ))}
        <h1>Card</h1>
      </div>
    );
  }
}
