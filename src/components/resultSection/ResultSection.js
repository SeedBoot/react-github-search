import React from 'react';
import TileOfTiles from '../TileOfTiles/TileOfTiles';
// import Tile from '../Tile/Tile';

class ResultSection extends React.Component {
  render() {
    if (this.props.searchData) {

      const results = this.props.searchData;

      console.log('result section, before the loop', results);

      const tileoftile = () => {
        for (let i in results) {
          if (results.hasOwnProperty(i)) {
            console.log('result section prop within the loop:', results)
            return (
              <React.Fragment>
                <h3>{i}</h3>
                <TileOfTiles
                  // key={i}
                  values={results[i]}
                />
              </React.Fragment>
            );
          }
        }
      };

      // const tileoftile = Object.keys(results).map((results) => {
      //   console.log(results)
      // })


      return (
        <section>
          {tileoftile()}
        </section>
      );
      // }
    }

    return null;
  }
}

export default ResultSection;
