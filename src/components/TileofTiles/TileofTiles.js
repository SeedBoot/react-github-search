import React from 'react';
import Tile from '../Tile/Tile';

class TileOfTiles extends React.Component {

    render() {
        // if (this.props.values) {
        // let i;
        // for (i in this.props.values) {
        console.log('tileoftile props.values:\n', this.props.values)
        // const tiles = this.props.values[i].map((data) =>
        const tiles = this.props.values.map((data) =>
            <Tile
                key={data.id}
                data={data}
            />
        );

        return (
            <React.Fragment>
                {tiles}
            </React.Fragment>
        );
        // }
    }
    //     return null;
    // }
}

export default TileOfTiles;
