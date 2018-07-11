import React from 'react';
import SearchForm from './main/searchForm';

class Main extends React.Component {
  render() {
    return (
      <main>
        <SearchForm submitHandler={this.insertMethodNameHere} />

        <section id="listing">
          <h2 id="heading"></h2>
          <p id="month-listing"></p>
        </section>

        <section id="repos">
            
        </section>
      </main>
    );
  }
}

export default Main;
