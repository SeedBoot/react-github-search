import React from 'react';
import moment from 'moment';

import './Tile.css';

class Tile extends React.Component {
  render() {
    const data = this.props.searchData;
    return (
      <div className="tile">
        <a
          href={data.html_url}
          target="_blank"
        >
          {data.name}
        </a>

        <p>
          {data.description}
        </p>

        <div className="info">
          <p>
            Created: {moment(data.created_at).format("Do MMMM YYYY")}
          </p>

          <p>
            Stars: {data.stargazers_count}
          </p>
        </div>
      </div>
    );
  }
}

export default Tile;
