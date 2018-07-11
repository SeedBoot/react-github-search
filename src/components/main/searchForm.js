import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    console.log(e.target.value);
    alert('This is what you wrote: ' + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <form id="form" action="#" method="get" onSubmit={this.handleSubmit}>
        <input
          id="input"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchForm;
