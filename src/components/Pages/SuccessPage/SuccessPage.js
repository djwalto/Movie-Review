import React, { Component } from 'react';
import { connect } from 'react-redux';

class SuccessPage extends Component {
  render() {
    return (
      <div>
        <h1>Success</h1>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(SuccessPage);
