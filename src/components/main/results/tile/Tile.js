import React from 'react';
import moment from 'moment';

class Tile extends React.Component {
  render() {
    return (
      <div className="tile">
        <a
          href={this.props.searchData.html_url}
          target="_blank"
        >
          {this.props.searchData.name}
        </a>
        <p>{this.props.searchData.description}</p>
        <div className="info">
          <p>Created: {moment(this.props.searchData.created_at).format("Do MMMM YYYY")}</p>
          <p>Stars: {this.props.searchData.stargazers_count}</p>
        </div>
      </div>
    );
  }
}

export default Tile;
