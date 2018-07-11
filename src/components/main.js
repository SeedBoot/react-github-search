import React from 'react';
import SearchForm from './main/searchForm';

import moment from 'moment';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleValueChange(e) {
    console.log('this is the target value: ' + e.target.value);
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    console.log(e);
    console.log(this.state.value)

    const oneMonthAgo = moment().subtract(1, "month").format("YYYY-MM-DD");

    const url = `https://api.github.com/search/repositories?q=language:${this.state.value}+created:>${oneMonthAgo}&sort=stars`;

    console.log(url);
  }

  render() {
    console.log('this is the state: ' + this.state.value);

    return (
      <main>
        <SearchForm
          changeHandler={this.handleValueChange}
          submitHandler={this.handleSubmit}
        />

        <section id="listing">
          <h2 id="heading"></h2>
          <p id="month-listing"></p>
        </section>

        <section id="repos">
            
        </section>
      </main>
    );
  }
}

export default Main;
