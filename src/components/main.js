import React from 'react';

import {
  oneMonthFormat,
  gitHubUrl, axiosRequest
} from '../utils';

import SearchForm from './main/SearchForm';
import SearchHeader from './main/SearchHeader';
import ResultSection from './main/ResultSection';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: '',
      data: undefined
    };
  }

  onTermChange = (lang) => {
    this.setState({ lang });
  }

  onSearch = () => {
    axiosRequest(gitHubUrl(this.state.lang))
      .then(data => this.setState({ data }));
  }

  render() {
    console.log('this is the state.value: ' + this.state.lang);

    return (
      <main>
        <SearchForm
          changeHandler={ this.onTermChange }
          submitHandler={ this.onSearch }
        />

        <SearchHeader
          lang={ this.state.lang }
          month={ oneMonthFormat }
        />

        <ResultSection
          searchData={ this.state.data }
        />
      </main>
    );
  }
}

export default Main;
