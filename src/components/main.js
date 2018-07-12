import React from 'react';
import axios from 'axios';
import moment from 'moment';
import SearchForm from './main/SearchForm';
import WithResults from './main/query/WithResults';
import WithoutResults from './main/query/WithoutResults';
import Repos from './main/results/Repos';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data: undefined
    };

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.request = this.request.bind(this);
  }

  request(urlStr) {
    axios.get(urlStr)
      .then(response => {
      this.setState({data: response.data.items});
      console.log(response.data.items)
    });
  }

  handleValueChange(e) {
    // console.log('this is the e.target.value: ' + e.target.value);
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    console.log(e);
    console.log(this.state.value);

    // this date is the correct format for Github's search API
    const oneMonthAgo = moment().subtract(1, "month").format("YYYY-MM-DD");

    const url = `https://api.github.com/search/repositories?q=language:${this.state.value}+created:>${oneMonthAgo}&sort=stars&per_page=3`;
    console.log(url);

    this.request(url);
  }

  render() {
    console.log('this is the state.value: ' + this.state.value);

    return (
      <main>
        <SearchForm changeHandler={this.handleValueChange}
          submitHandler={this.handleSubmit}
        />

        {
          this.state.data
            ?
              <React.Fragment>
                <WithResults inputValue={this.state.value} />
                <Repos searchData={this.state.data} />
              </React.Fragment>
            :
              <WithoutResults inputValue={this.state.value} />
        }
      </main>
    );
  }
}

export default Main;
