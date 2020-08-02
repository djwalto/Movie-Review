import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import './MoviePage.css';
class MoviePage extends Component {
  state = {
    thisMovie: {
      genres: [],
    },
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

  editMovie = (event) => {
    this.props.history.push(`/edit/${this.state.thisMovie.id}`);
  };
  render() {
    return (
      <div className="moviepage">
        <img src={this.state.thisMovie.poster}></img>
        <h1>{this.state.thisMovie.title}</h1>
        <p>{this.state.thisMovie.description}</p>
        <p>{this.state.thisMovie.genre}</p>
        <Button variant="outline-info" onClick={this.goBack}>
          Back To List
        </Button>

        <Button variant="outline-info" onClick={this.editMovie}>
          Edit
        </Button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(MoviePage);
