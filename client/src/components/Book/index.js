import React, { Component } from 'react';
import { ListItem } from '../List';
import { Row, Col } from '../Grid';
import './style.css';

// Changed from functional to class based component
class Book extends Component {
  render() {
    // Descructuring props
    const {
      title,
      subtitle,
      authors,
      link,
      description,
      image,
      Button
    } = this.props;
    return (
      <ListItem>
        <Col size="md-12">
          <Row className="flex-wrap-reverse">
            <Col size="md-9">
              <h3 className="font-italic">{title}</h3>
              {subtitle && <h5 className="font-italic">{subtitle}</h5>}
            </Col>
            <Col size="md-3">
              <div className="btn-container">
                <a
                  className="btn btn-light"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link}
                >
                  View
                </a>
                <Button />
              </div>
            </Col>
          </Row>
          <Row className="author">
            <Col size="md-6">
              <p className="font-italic small">Written by {authors}</p>
            </Col>
          </Row>
          <Row>
            <Col size="12 sm-4 md-2">
              <img
                className="img-thumbnail img-fluid w-100"
                src={image}
                alt={title}
              />
            </Col>
            <Col size="12 sm-8 md-10">
              <p>{description}</p>
            </Col>
          </Row>
        </Col>
      </ListItem>
    );
  }
}

export default Book;
