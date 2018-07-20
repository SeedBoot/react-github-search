import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    termChange,
    dateChange,
    numberOfResultsChange,
    dataChange,
} from '../../actions';

import {
    monthFormat,
    axiosRequest
} from '../../utils';

import SearchForm from '../SearchForm/SearchForm';
import SearchInput from '../SearchInput/SearchInput';
import OptionMenu from '../OptionMenu/OptionMenu';
import SelectMonth from '../SelectMonth/SelectMonth';
import SelectResultsNum from '../SelectResultsNum/SelectResultsNum';
import SearchHeader from '../SearchHeader/SearchHeader';
import ResultSection from '../ResultSection/ResultSection';

import './Main.css';

class Main extends React.Component {

    // stateCheck = () => {
    //     console.log('-------------------------');
    //     for (let i in this.props) {
    //         if (this.props[i] !== this.props.dispatch) {
    //             console.log(`this is the props.${i}: ${this.props[i]}`)
    //         }
    //     }
    //     console.log('-------------------------');
    // };

    // onTermChange = lang => {
    //     this.props.dispatch(termChange(lang));
    // }

    onTermChange = lang => {
        this.props.termChange(lang);
    }

    // onNumberOfResultsChange = (number) => {
    //     this.props.dispatch(numberOfResultsChange(number));
    // }

    onNumberOfResultsChange = (number) => {
        this.props.numberOfResultsChange(number);
    }

    // onMonthChange = (number) => {
    //     this.props.dispatch(dateChange(number));
    // }

    onMonthChange = (number) => {
        this.props.dateChange(number);
    }

    // onSearch = () => {
    //     const { lang, numberOfResults, date } = this.props;

    //     axiosRequest({ lang, numberOfResults, date })
    //         .then(data => this.props.dispatch(dataChange(data)));
    // }

    onSearch = () => {
        const { lang, numberOfResults, date } = this.props;

        axiosRequest({ lang, numberOfResults, date })
            .then(data => this.props.dataChange(data));
    }

    render() {
        // this.stateCheck();

        return (
            <main>
                <SearchForm
                    submitHandler={this.onSearch}
                >
                    <SearchInput
                        changeHandler={this.onTermChange}
                    />
                </SearchForm>

                <OptionMenu>
                    <SelectMonth
                        monthHandler={this.onMonthChange}
                    />
                    <SelectResultsNum
                        numberOfResultsHandler={this.onNumberOfResultsChange}
                    />
                </OptionMenu>

                <SearchHeader
                    lang={this.props.lang}
                    month={monthFormat(this.props.date)}
                />

                <ResultSection
                    searchData={this.props.data}
                />
            </main>
        );
    }
}


const mapStateToProps = state => {
    return {
        lang: state.lang,
        date: state.date,
        numberOfResults: state.numberOfResults,
        data: state.data,
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        termChange,
        numberOfResultsChange,
        dateChange,
        dataChange
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
