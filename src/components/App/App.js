import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import SuccessPage from '../Pages/SuccessPage/SuccessPage';
import MoviePage from '../Pages/Home/MoviePage/MoviePage';
import EditPage from '../Pages/Home/EditPage/EditPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  // Renders the entire app on the DOM
  componentDidMount() {
    this.props.dispatch({ type: 'GET_MOVIES' });
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div className="jumbotron">
            <div className="overlay"></div>
            <div className="description">
              <h1>Movies Trending Now</h1>
            </div>
          </div>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:id" component={MoviePage} />
          <Route exact path="/edit/:id" component={EditPage} />
          <Route exact path="/success/:id" component={SuccessPage} />
          <footer className="page-footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <h6 className="text-uppercase font-weight-bold">
                    WHY I LOVE MOVIES
                  </h6>
                  <p>
                    Movies help you escape reality where your imagination is the
                    limit
                  </p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <h6 className="text-uppercase font-weight-bold">Contact</h6>
                  <p>
                    davidjwalton2020@gmail.com
                    <br />
                  </p>
                </div>
              </div>
              <div className="footer-copyright text-center">
                © 2020 Copyright localhost.com
              </div>
            </div>
          </footer>
        </Router>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(App);
