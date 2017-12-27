import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import '../styles/post_index.scss';

class PostIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.total.map(item =>
        <li className="list-group-item" key={item.id}>
          <div>
            <span>{item.categories}</span>
            <strong>{item.title}</strong>
          </div>
            </li>);
  }

  render() {
    return (
      <div>
        <Link className="addPost btn btn-primary" to="/new">
          Add post
        </Link>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
  return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);
