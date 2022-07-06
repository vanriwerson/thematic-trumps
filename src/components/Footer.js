import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {  
  render () {
    return (
      <footer className="footer">
        <section className="socials">
          <h4>Follow me at:</h4>
          <a
            href="https://github.com/vanriwerson"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/2x/external-github-community-for-software-building-and-testing-online-logo-bold-tal-revivo.png"
              alt="Github icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/bruno-riwerson/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/android/2x/linkedin.png"
              alt="Linkedin icon"
            />
          </a>
        </section>
        <section className="signature">
          <p>{'<dev> Bruno Riwerson Silva </dev>'}</p>
        </section>
      </footer>
    );
  }
}
