import React, { Component } from 'react';
import { connect } from 'react-redux';
import MoviesListItem from '../MovieListItem/MovieListItem';

class MoviesList extends Component {
  render() {
    const moviesListArray = this.props.store.movies.map((item, index) => {
      return (
        <MoviesListItem movies={item} handleClick={this.props.handleClick} />
      );
    });

    return <div>{moviesListArray}</div>;
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(MoviesList);
