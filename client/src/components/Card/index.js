import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { icon, title, children } = this.props;
    return (
      <div className="card mt-4">
        <div className="card-header">
          <h3>
            <strong>
              <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
            </strong>
          </h3>
        </div>
        <div className="card-body">{children}</div>
      </div>
    );
  }
}

export default Card;
