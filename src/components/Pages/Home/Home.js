import React, { Component } from 'react';
import MoviesList from '../../MoviesList/MoviesList';

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
export default Home;
