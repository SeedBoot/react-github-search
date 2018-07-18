import React from 'react';

class SearchHeader extends React.Component {
  render() {
    
    return (
      <section id="listing">
        <h2 id="heading">Most Stars: {this.props.lang || '...'}</h2>
        <p id="month-listing">Repos created since {this.props.month}</p>
      </section>
    );
  }
}

export default SearchHeader;
