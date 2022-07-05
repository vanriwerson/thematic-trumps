import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default class Card extends Component {
  handleClick = ({ target }) => {
    console.log(target.value);
  }

  render() {
    const { id, name, strength, agility, intelligence,
      charisma, imgLink, isTrumpCard, onButtonClick = this.handleClick } = this.props;
    return(
      <div className="card">
        <h1 className="card-title">
          { name }
          <span className="card-id">{ id }</span>
        </h1>
        <div className="img-container">
          <img src={ imgLink } alt={ name } className="card-image"/>
          {isTrumpCard && <p className="top-trump">Super Trunfo</p>}
        </div>
        <div>
          <button
            type="button"
            value={ strength }
            onClick={ (e) => onButtonClick(e) }
          >
            Força
            <span>{ strength }</span>
          </button>

          <button
            type="button"
            value={ agility }
            onClick={ (e) => onButtonClick(e) }
          >
            Agilidade
            <span>{ agility }</span>
          </button>

          <button
            type="button"
            value={ intelligence }
            onClick={ (e) => onButtonClick(e) }
          >
            Inteligência
            <span>{ intelligence }</span>
          </button>

          <button
            type="button"
            value={ charisma }
            onClick={ (e) => onButtonClick(e) }
          >
            Carisma
            <span>{ charisma }</span>
          </button>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  strength: PropTypes.number.isRequired,
  agility: PropTypes.number.isRequired,
  intelligence: PropTypes.number.isRequired,
  charisma: PropTypes.number.isRequired,
  imgLink: PropTypes.string.isRequired,
  isTrumpCard: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func,
};
