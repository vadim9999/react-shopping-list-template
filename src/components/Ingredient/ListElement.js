import React, { Component } from 'react';
import shortid from "shortid";

class ListElement extends Component {
    render() {
        return (
          <ul>
              {this.props.data.map(
                item =>
                <li key={shortid.generate()}>{item}</li>)}
          </ul>
        );
    }
}

export default ListElement;