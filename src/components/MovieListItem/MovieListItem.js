import React, { Component } from 'react';
import { connect } from 'react-redux';

class MoviesListItem extends Component {
  render() {
    return (
      <div onClick={this.props.handleClick(this.props.movies.id)}>
        <img src={this.props.movies.poster} />
        <h4>{this.props.movies.title}</h4>
      </div>
    );
  }
}
const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(MoviesListItem);
