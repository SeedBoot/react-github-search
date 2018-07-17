import React from 'react';

import './Header.css'

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Github Search API</h1>
        <p>Search for the top 3 Repositories of your favourite language created in the last month!</p>
      </header>
    );
  }
}

export default Header;
