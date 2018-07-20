import React from 'react';
import Tile from '../Tile/Tile';

class ResultSection extends React.Component {
  render() {
    if (this.props.searchData) {
      console.log('this.props.searchdata', this.props.searchData)
      let i;
      for (i in this.props.searchData) {
        console.log('tile render:\n', this.props.searchData[i])
        const tiles = this.props.searchData[i].map((data) =>
          // const tiles = this.props.searchData.map((data) =>
          <Tile
            key={data.id}
            searchData={data}
          />
        );

        return (
          <section>
            {tiles}
          </section>
        );
      }
    }

    return null;
  }
}

export default ResultSection;
