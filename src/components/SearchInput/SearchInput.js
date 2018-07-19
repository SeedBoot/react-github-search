import React from 'react';

import './SearchInput.css';

class SearchInput extends React.Component {

    handleChange = (e) => {
        return this.props.changeHandler(e.target.value);
    }

    render() {
        return (
            <div className="search-input">
                <input
                    id="input"
                    type="text"
                    onChange={this.handleChange}
                />

                <input
                    type="submit"
                    value="Search"
                />
            </div>
        )
    }
}

export default SearchInput;