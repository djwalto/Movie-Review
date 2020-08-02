import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import SuccessPage from '../Pages/SuccessPage/SuccessPage';
import MoviePage from '../Pages/Home/MoviePage/MoviePage';
import EditPage from '../Pages/Home/EditPage/EditPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  componentDidMount() {
    this.props.dispatch({ type: 'GET_MOVIES' });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:id" component={MoviePage} />
          <Route exact path="/edit/:id" component={EditPage} />
          <Route exact path="/success/:id" component={SuccessPage} />
        </Router>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(App);
