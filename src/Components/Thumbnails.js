import React, { Component } from 'react';
import Thumbnail from './Thumbnail';

class Thumbnails extends Component {
  render(props) {
    return (
      <Thumbnail thumbnails={this.props.thumbnails} />
    );
  }
}

export default Thumbnails;
