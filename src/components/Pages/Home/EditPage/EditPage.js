import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditPage extends Component {
  render() {
    return (
      <div>
        <h1>Add A Movie</h1>
        <label>Title</label>
        <br></br>
        <input type="text"></input>
        <br></br>
        <label>Description</label>
        <br></br>
        <textarea id="moviedesc" name="moviedesc" rows="4" cols="50"></textarea>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(EditPage);
