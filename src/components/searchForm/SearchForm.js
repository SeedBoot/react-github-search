import React from 'react';

class SearchForm extends React.Component {

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
        {this.props.children}
      </form>
    );
  }
}

export default SearchForm;
