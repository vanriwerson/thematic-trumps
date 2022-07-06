import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default class Game extends Component {
  render() {
    return(
      <>
        <Header />
          <div>
            <h1>Game</h1>
          </div>
        <Footer />
      </>
    );
  }
}
