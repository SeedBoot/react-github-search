import React from 'react';

import './SearchForm.css';

class SearchForm extends React.Component {

  handleChange = (e) => {
    return this.props.changeHandler(e.target.value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    return this.props.submitHandler();
  }

  render() {
    return (
      <form
        id="form"
        action="#"
        method="get"
        onSubmit={this.handleSubmit}
      >
        <input
          id="input"
          type="text"
          onChange={this.handleChange}
        />

        <input
          type="submit"
          value="Search"
        />
      </form>
    );
  }
}

export default SearchForm;
