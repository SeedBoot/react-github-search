import React from 'react';
import { connect } from 'react-redux';

import {
  termChange,
  dataChange,
  numberOfResultsChange
} from '../../actions';

import {
  oneMonthFormat,
  gitHubUrl, axiosRequest
} from '../../utils';

import SearchForm from '../SearchForm/SearchForm';
import OptionMenu from '../OptionMenu/OptionMenu';
import SearchHeader from '../SearchHeader/SearchHeader';
import ResultSection from '../ResultSection/ResultSection';

import './Main.css';
import SearchInput from '../SearchInput/SearchInput';

class Main extends React.Component {

  stateCheck = () => {
    console.log('-------------------------');
    for (let i in this.props) {
      if (this.props[i] !== this.props.dispatch) {
        console.log(`this is the props.${i}: ${this.props[i]}`)
      }
    }
    console.log('-------------------------');
  };

  onTermChange = lang => {
    // this.setState({ lang });
    this.props.dispatch(termChange(lang));
  }

  onNumberOfResultsChange = (number) => {
    this.props.dispatch(numberOfResultsChange(number));
  }

  onSearch = () => {
    axiosRequest(gitHubUrl(this.props.lang, this.props.numberOfResults))
      // .then(data => this.setState({ data }))
      .then(data => this.props.dispatch(dataChange(data)));
  }

  render() {
    this.stateCheck();

    return (
      <main>
        <SearchForm
          submitHandler={this.onSearch}
        >
          <SearchInput
            changeHandler={this.onTermChange}
          />
        </SearchForm>

        <OptionMenu
          numberOfResultsHandler={this.onNumberOfResultsChange}
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
    // gitHubUrl: state.gitHubUrl,
    lang: state.lang,
    numberOfResults: state.numberOfResults,
    data: state.data,
  };
}

export default connect(mapStateToProps)(Main);

// export default Main;
