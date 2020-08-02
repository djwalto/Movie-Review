import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './MoviesListItem.css';

// this component returns markup for the list page
class MoviesListItem extends Component {
  render() {
    return (
      <div className="cards">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image
                src={this.props.movie.poster}
                onClick={this.props.handleViewClick(this.props.movie.id)}
              />
              <h4>{this.props.movie.title}</h4>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(MoviesListItem);
