import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import Container from 'react-bootstrap/Container';
// this component is the inputs for changing movie title and description
class EditPage extends Component {
  state = {
    title: '',
    description: '',
  };
  // goes back to details page
  cancelEdit = (id) => (event) => {
    this.props.history.push(`/details/${id}`);
  };
  // tracks inout fields
  onInputChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };
  //confirms submission and updates accordingly
  updateMovie = (id) => (event) => {
    Swal.fire({
      title: 'Are you sure you want to edit?',
      text: 'You can always go back!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Your movie has been edited.');
      }
    });
    let newMovie = {
      ...this.state,
      id: Number(this.props.match.params.id),
    };
    this.props.dispatch({
      type: 'UPDATE_MOVIE',
      payload: newMovie,
    });
    this.props.history.push(`/details/${id}`);
  };

  render() {
    return (
      <div className="edit">
        <Container>
          <br></br>
          <h1>Edit Your Movie</h1>
          <br></br>
          <label>Edit Title</label>
          <br></br>
          <input
            className="input"
            type="text"
            onChange={this.onInputChange('title')}
          ></input>
          <br></br>
          <br></br>
          <label>Edit Description</label>
          <br></br>
          <textarea
            className="input"
            onChange={this.onInputChange('description')}
            id="moviedesc"
            name="moviedesc"
            rows="4"
            cols="50"
          ></textarea>
          <br></br>
          <Button
            variant="outline-danger"
            onClick={this.cancelEdit(this.props.match.params.id)}
          >
            Cancel
          </Button>
          <Button
            variant="outline-danger"
            onClick={this.updateMovie(this.props.match.params.id)}
          >
            Save
          </Button>
        </Container>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(EditPage);
