import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MoviesListItem.css';

class MoviesListItem extends Component {
  render() {
    return (
      <div className="cards">
        <Container>
          <Row>
            <Col xs>
              <CardColumns>
                <Card className="p-3">
                  <Card.Img
                    variant="top"
                    src={this.props.movie.poster}
                    onClick={this.props.handleViewClick(this.props.movie.id)}
                  />
                  <Card.Body>
                    <Card.Title>{this.props.movie.title}</Card.Title>
                  </Card.Body>
                </Card>
              </CardColumns>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(MoviesListItem);
