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
  goBack = (event) => {
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <img src={this.state.thisMovie.poster}></img>
        <h1>{this.state.thisMovie.title}</h1>
        <p>{this.state.thisMovie.description}</p>
        <button onClick={this.goBack}>Back To List</button>

        <button>Edit</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(MoviePage);
