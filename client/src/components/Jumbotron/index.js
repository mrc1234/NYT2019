import React, { Component } from 'react';
import './style.css';

class Jumbotron extends Component {
  render() {
    const { children } = this.props;
    return <div className="jumbotron mt-4">{children}</div>;
  }
}

export default Jumbotron;
