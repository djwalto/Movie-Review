import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import './MoviePage.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// this is the details page for movie selected
class MoviePage extends Component {
  state = {
    thisMovie: {
      genres: [],
    },
  };

  // was hoping to use componentDidMount to show edited movie title
  // and description but not functioning yet
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_MOVIE',
      payload: this.props.match.params.id,
    });
    let currentId = this.props.match.params.id;
    let currentMovie = {};
    for (let movie of this.props.store.movies) {
      if (currentId == movie.id) {
        currentMovie = movie;
      }
    }
    this.setState({
      thisMovie: currentMovie,
    });
  }

  // go back to home page
  goBack = (event) => {
    this.props.history.push('/');
  };

  // go to edit page
  editMovie = (event) => {
    this.props.history.push(`/edit/${this.state.thisMovie.id}`);
  };
  render() {
    return (
      <div className="moviepage">
        <Container>
          <Row>
            <Col l={20}>
              <Image src={this.state.thisMovie.poster}></Image>
              <h1>{this.state.thisMovie.title}</h1>
              <p>{this.state.thisMovie.description}</p>
              <p>{this.state.thisMovie.genre}</p>
              <Button variant="outline-danger" onClick={this.goBack}>
                Back To List
              </Button>
              <Button variant="outline-danger" onClick={this.editMovie}>
                Edit
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(MoviePage);
