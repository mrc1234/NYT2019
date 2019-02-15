import React, { Component } from 'react';
import './style.css';

// This component exports both the List and ListItem components

export const List = ({ children }) => (
  <ul className="list-group">{children}</ul>
);

export class ListItem extends Component {
  render() {
    const { children } = this.props;
    return <li className="list-group-item">{children}</li>;
  }
}
