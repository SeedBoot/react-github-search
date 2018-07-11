import React from 'react';
import Tile from './tile/Tile';

class Repos extends React.Component {
  render() {
    if (this.props.searchData) {
    // console.log(tileData);
    const tiles = this.props.searchData.map((data) =>
      <Tile
      key={data.id}
        searchData={data}
      />
    );
    
      return (
        <section id="repos">
          {tiles}
        </section>
      );
    }
  }
}

export default Repos;
