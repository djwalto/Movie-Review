import React, { Component } from 'react';
import { connect } from 'react-redux';

class MoviePage extends Component {
  state = {
    thisMovie: {},
  };
  componentDidMount() {
    console.log(this.state.thisMovie);
    console.log(this.props.match.params.id);

    console.log(this.props.store.movies);
    let currentId = this.props.match.params.id;
    let currentMovie = {};

    for (let movie of this.props.store.movies) {
      if (currentId == movie.id) {
        currentMovie = movie;
      }
    }
    this.setState(
      {
        thisMovie: currentMovie,
      },
      () => {
        console.log(this.state.thisMovie);
      }
    );
  }
  render() {
    return (
      <div>
        <h1>THIS MOVIE</h1>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(MoviePage);
