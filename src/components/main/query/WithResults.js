import React from 'react';
import moment from 'moment';

class WithResults extends React.Component {
  render() {
    const oneMonthFormat = moment().subtract(1, "month").format("Do MMMM YYYY");
    
    return (
      <section id="listing">
        <h2 id="heading">Most Stars: {this.props.inputValue}</h2>
        <p id="month-listing">Repos created since {oneMonthFormat}</p>
      </section>
    );
  }
}

export default WithResults;
