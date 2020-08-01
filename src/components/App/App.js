import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import MoviePage from '../Pages/Home/MoviePage/MoviePage';
import EditPage from '../Pages/Home/EditPage/EditPage';

class App extends Component {
  // Renders the entire app on the DOM
  componentDidMount() {
    this.props.dispatch({ type: 'GET_MOVIES' });
  }

  render() {
    return (
      <div className="App">
        <h1>MOVIES</h1>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/details/:id" component={MoviePage} />
          <Route path="/edit/:id" component={EditPage} />
        </Router>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(App);
