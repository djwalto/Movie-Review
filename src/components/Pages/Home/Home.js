import React, { Component } from 'react';
import MoviesList from '../../MoviesList/MoviesList';
import { connect } from 'react-redux';

class Home extends Component {
  handleViewClick = (id) => (event) => {
    this.props.history.push(`/details/${id}`);
  };

  render() {
    return (
      <div>
        <MoviesList handleViewClick={this.handleViewClick} />
      </div>
    );
  }
}
const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Home);
