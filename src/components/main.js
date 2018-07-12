import React from 'react';

import {
  gitHubMonthQuery, oneMonthFormat,
  gitHubUrl, axiosRequest
} from '../utils';

import SearchForm from './main/SearchForm';
import WithResults from './main/query/WithResults';
// import WithoutResults from './main/query/WithoutResults';
import Repos from './main/results/Repos';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data: undefined
    };
  }

  onTermChange = (value) => {
    this.setState({ value });
  }

  onSearch = () => {
    axiosRequest(gitHubUrl(this.state.value, gitHubMonthQuery), this);
  }

  render() {
    console.log('this is the state.value: ' + this.state.value);

    return (
      <main>
        <SearchForm
          changeHandler={ this.onTermChange }
          submitHandler={ this.onSearch }
        />

        <WithResults
          inputValue={ this.state.value }
          month={oneMonthFormat}
        />

        <Repos
          searchData={ this.state.data }
        />
      </main>
    );
  }
}

export default Main;
