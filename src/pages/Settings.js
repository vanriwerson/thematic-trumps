import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import saveSettings from '../store/actions';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Settings extends Component {
  state = {
    deckLength: 32,
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    const { deckLength } = this.state;
    const { savePreferences } = this.props;

    savePreferences(Number(deckLength));
  }

  render() {
    const { deckLength } = this.state;

    return(
      <>
        <Header />
        <div className="settings">
          <h1>Preferências</h1>
          
          <label htmlFor="deckLength">
            Com quantas cartas deseja jogar?
            <select
              id="deckLength"
              name="deckLength"
              value={ deckLength }
              onChange={ (e) => this.handleChange(e) }
            >
              <option>8</option>
              <option>16</option>
              <option>24</option>
              <option>32</option>
            </select>
          </label>

          <p>O número de cartas escolhido pode aumentar ou diminuir o tempo de jogo</p>
          
          <button
            type="button"
            onClick={ this.handleClick }
          >
            Salvar Preferências
          </button>
        </div>
        <Footer />
      </>
    );
  }
}

Settings.propTypes = {
  savePreferences: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  savePreferences: (preferences) => dispatch(saveSettings(preferences)),
});

export default connect(null, mapDispatchToProps)(Settings);
