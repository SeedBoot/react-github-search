import React from 'react';

import './OptionMenu.css';

class OptionMenu extends React.Component {

    handleChange = (e) => {
        return this.props.numberOfResultsHandler(e.target.value);
    }

    render() {
        return (
            <div className="option-menu">
                <label htmlFor="number-of-results">Number of results: </label>
                <select
                    id="number-of-results"
                    onChange={this.handleChange}
                >
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                </select>
            </div>
        )
    }
}

export default OptionMenu;
