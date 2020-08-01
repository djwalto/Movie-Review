import React, { Component } from 'react';
import { connect } from 'react-redux';

class MoviesListItem extends Component {
  render() {
    return (
      <div>
        <img
          src={this.props.movie.poster}
          onClick={this.props.handleClick(this.props.movie.id)}
        />
        <h4>{this.props.movie.title}</h4>
      </div>
    );
  }
}
const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(MoviesListItem);
