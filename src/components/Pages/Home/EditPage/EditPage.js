import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditPage extends Component {
  cancelEdit = (id) => (event) => {
    console.log(id);
    this.props.history.push(`/details/${id}`);
  };
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
        <button onClick={this.cancelEdit(this.props.match.params.id)}>
          Cancel
        </button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(EditPage);
