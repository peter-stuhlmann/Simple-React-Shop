import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <p>&copy; <a href="https://peter-stuhlmann-webentwicklung.de/">Peter R. Stuhlmann Webentwicklung</a>, 2019</p>
        <nav>
          <ul>
            <li><Link to="/legalnotice">Impressum</Link></li>
            <li><Link to="/privacypolicy">Datenschutzerklärung</Link></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/peter-stuhlmann/">Github</a></li>
          </ul>
        </nav>
      </footer>
    );
  }
}
