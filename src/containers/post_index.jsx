import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';

class PostIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts()
  }

  renderPosts() {
      return this.props.posts.total.map(item=>(
          <li key={item.id}>{item.title}</li>
      ))
  }


  render() {
      return <div><ul>{this.renderPosts()}</ul></div>;
  }
}

function mapStateToProps({posts}) {
    return {posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostIndex);