import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    termChange, dateChange,
    numberOfResultsChange, dataChange,
    dataSuccess,
} from '../../actions';

import {
    monthFormat, axiosRequest
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

    onTermChange = lang => {
        this.props.termChange(lang);
    }

    onMonthChange = (number) => {
        this.props.dateChange(number);
    }

    onNumberOfResultsChange = (number) => {
        this.props.numberOfResultsChange(number);
    }

    onSearch = () => {
        const { lang, numberOfResults, date } = this.props;

        axiosRequest({ lang, numberOfResults, date })
            .then(response => {
                console.log(`Status code: ${response.status}`);
                console.log('Response data array:\n', response.data.items);

                if (response.status === 200) {
                    // if (response.data.items.language === null) {
                    //     return null;
                    // }
                    // const langName = response.data.items.language;

                    // return this.props.dataSuccess({ [response.data.items[0].language]: response.data.items });
                    return this.props.dataSuccess(response.data.items);

                }
            })
        // .then(data => this.props.dataChange(data));

        // .then(data => {
        //     console.log(data);
        //     this.props.dataSuccess(data.items);
        // })

        // )
    }

    render() {
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
                    searchData={this.props.langData}
                />
            </main>
        );
    }
}

const mapStateToProps = state => {
    const { lang, date, numberOfResults, data, langData } = state;

    return {
        lang,
        date,
        numberOfResults,
        data,
        langData
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        termChange,
        dateChange,
        numberOfResultsChange,
        dataChange,
        dataSuccess,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
