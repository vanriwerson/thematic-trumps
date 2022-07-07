import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Login from '../components/Login';
import './Home.css';

export default class Home extends Component {
  render() {
    const { history } = this.props;

    return(
      <>
        <Header />
        <main className="home">
          <div className="texts">
            <section>
              <h1>Super Trunfo</h1>
              <p>Esse jogo fez parte da minha infância (e da de muita gente ^^) e, agora que já estou um pouco mais avançado nos estudos, sinto-me confiante para fazer essa pequena e justa homenagem. Minha própria releitura do joguinho!</p>
            </section>
            <section>
              <h1>Kipo e os Animonstros</h1>
              <p>Essa série animada de Radford Sechrist e Bill Wolkoff (Disponível na Netflix) é para mim igualmente apaixonante e com uma temática importantíssima abordada de forma leve.</p>
              <p>Recomendo que acompanhem Kipo mudando o mundo e espero que gostem do jogo</p>
            </section>
          </div>
          <Login history={ history } />
        </main>
        <Footer />
      </>
    );
  }
}

Home.propTypes = {
  history: PropTypes.instanceOf(Array),
}.isRequired;
