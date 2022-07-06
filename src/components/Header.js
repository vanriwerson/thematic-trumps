import React, { Component } from 'react';
import NavigationMenu from './NavigationMenu';
import './Header.css';

export default class Header extends Component {
  render () {
    return (
      <header className="header">
        <h1>
          Meu Super Trunfo temático
        </h1>
        <NavigationMenu />
      </header>
    );
  }
}
