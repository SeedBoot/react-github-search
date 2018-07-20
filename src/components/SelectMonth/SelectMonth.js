import React from 'react';

class SelectMonth extends React.Component {

    handleChange = (e) => {
        return this.props.monthHandler(e.target.value);
    }

    render() {
        return (
            <div>
                <label htmlFor="date-picker">Created within: </label>
                <select
                    id="date-picker"
                    onChange={this.handleChange}
                >
                    <option value="1">1 month</option>
                    <option value="2">2 months</option>
                    <option value="3">3 months</option>
                    <option value="6">6 months</option>
                    <option value="12">12 months</option>
                </select>
            </div>
        )
    }
}

export default SelectMonth;
