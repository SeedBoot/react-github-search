import React from 'react';

class WithoutResults extends React.Component {
  render() {
    return (
      <section id="listing">
        <h2 id="heading">Most Stars: {this.props.inputValue || '...'}</h2>
      </section>
    );
  }
}

export default WithoutResults;
