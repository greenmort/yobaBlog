import React, { Component } from 'react';
import PostIndex from '../containers/post_index';
import '../styles/main.scss';

class App extends Component {
  render() {
    return (
      <div className="main">
        <h1>Hello, Redux</h1>
        <PostIndex />
      </div>
    );
  }
}

export default App;
