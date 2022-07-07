import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { savePlayerData } from '../store/actions';

class Login extends Component {
  state = {
    name: '',
    email: '',
    imgUrl: '',
    isDisabled: true,
  }

  handleChange =({ target: { name, value } }) => {
    this.setState(
      ({ [name]: value }),
      this.handleValidateInputs,
    );
  }

  handleValidateInputs = () => {
    const { name, email } = this.state;
    const MIN_LEN = 3;
    const isValidEmail = email.includes('@') && email.includes('.com');
    const isValidName = name.length > MIN_LEN;

    const isValidInputs = isValidEmail && isValidName;
    this.setState({ isDisabled: !isValidInputs });
  }

  handleClick = async () => {
    const { history, setPlayerData } = this.props;
    const { name, imgUrl } = this.state;
    const player = {
      name,
      imgUrl,
      score: 0,
    };
    setPlayerData(player);
    history.push('/game');
  }

  handleRedirectToSettings = () => {
    const { history } = this.props;
    history.push('/settings');
  }

  render() {
    const { name, email, isDisabled } = this.state;
    return (
      <div>
        <label htmlFor="player">
          Usuario:
          <input
            name="name"
            value={ name }
            type="text"
            id="player"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            name="email"
            value={ email }
            type="email"
            id="email"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ isDisabled }
          onClick={ this.handleClick }
        >
          Jogar
        </button>
        <button
          type="button"
          onClick={ this.redirectToConfigs }
        >
          Configurações
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  setPlayerData: PropTypes.func,
  history: PropTypes.instanceOf(Array),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  setPlayerData: (playerData) => dispatch(savePlayerData(playerData)),
});

export default connect(null, mapDispatchToProps)(Login);
