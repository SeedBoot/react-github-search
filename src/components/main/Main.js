import React from 'react';
import { connect } from 'react-redux';

import { termChange, dataChange } from '../../actions';

import {
  oneMonthFormat,
  gitHubUrl, axiosRequest
} from '../../utils';

import SearchForm from '../SearchForm/SearchForm';
import SearchHeader from '../SearchHeader/SearchHeader';
import ResultSection from '../ResultSection/ResultSection';

import './Main.css';

class Main extends React.Component {

  onTermChange = (lang) => {
    // this.setState({ lang });
    this.props.dispatch(termChange(lang));
  }

  onSearch = () => {
    axiosRequest(gitHubUrl(this.props.lang))
      // .then(data => this.setState({ data }))
      .then(data => this.props.dispatch(dataChange(data)));
  }

  render() {

    console.log('-------------------------');
    console.log(`this is the props.lang: ${this.props.lang}`);
    console.log(`this is the props.data: ${this.props.data}`);
    console.log('-------------------------');

    return (
      <main>
        <SearchForm
          changeHandler={this.onTermChange}
          submitHandler={this.onSearch}
        />

        <SearchHeader
          lang={this.props.lang}
          month={oneMonthFormat}
        />

        <ResultSection
          searchData={this.props.data}
        />
      </main>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {

//   };
// }

const mapStateToProps = state => {
  return {
    lang: state.lang,
    data: state.data,
  };
}

export default connect(mapStateToProps)(Main);

// export default Main;
