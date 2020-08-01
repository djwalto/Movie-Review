import React, { Component } from 'react';
import { connect } from 'react-redux';
import MoviesListItem from '../MoviesListItem/MoviesListItem';

class MoviesList extends Component {
  render() {
    const moviesListArray = this.props.store.movies.map((item, index) => {
      return (
        <MoviesListItem
          movie={item}
          handleViewClick={this.props.handleViewClick}
        />
      );
    });

    return <div>{moviesListArray}</div>;
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(MoviesList);
