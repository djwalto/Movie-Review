import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import MoviesList from '../MoviesList/MoviesList';

class App extends Component {
  // Renders the entire app on the DOM
  componentDidMount() {
    this.props.dispatch({ type: 'GET_MOVIES' });
  }

  render() {
    return (
      <div className="App">
        <p>I NEED DATA</p>
        <MoviesList />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(App);
