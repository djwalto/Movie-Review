import React, { Component } from 'react';
import { connect } from 'react-redux';

class MoviePage extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
  }
  render() {
    return <div></div>;
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(MoviePage);
