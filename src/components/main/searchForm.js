import React from 'react';

class SearchForm extends React.Component {
  render() {
    return (
      <form id="form"
        action="#"
        method="get"
        onSubmit={this.props.submitHandler}
      >
        <input id="input"
          type="text"
          /*value={this.state.value}*/
          onChange={this.props.changeHandler}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchForm;
