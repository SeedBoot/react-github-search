import React from 'react';
import Tile from './tile/Tile';

class Repos extends React.Component {
  render() {
    if (this.props.searchData) {
    const tiles = this.props.searchData.map((data) =>
      <Tile key={ data.id }
        searchData={ data }
      />
    );
    
      return (
        <section id="repos">
          { tiles }
        </section>
      );
    }
    
    return null;
  }
}

export default Repos;
