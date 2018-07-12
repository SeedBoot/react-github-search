import React from 'react';

class WithResults extends React.Component {
  render() {
    
    return (
      <section id="listing">
        <h2 id="heading">Most Stars: {this.props.inputValue || '...'}</h2>
        <p id="month-listing">Repos created since {this.props.month}</p>
      </section>
    );
  }
}

export default WithResults;
