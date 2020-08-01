import React, { Component } from 'react';
import MoviesList from '../../MoviesList/MoviesList';
import { connect } from 'react-redux';

class Home extends Component {
  handleClick = (id) => (event) => {
    this.props.history.push(`/details/${id}`);
  };

  render() {
    return (
      <div>
        <MoviesList handleClick={this.handleClick} />
      </div>
    );
  }
}
const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Home);
