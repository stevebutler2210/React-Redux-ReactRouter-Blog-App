import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>List of blog posts</div>
    );
  }
}

// passing { fetchPosts: fetchPosts } or { fetchPosts } === mapPropsToDispatch
// function to map fetchPosts to props
export default connect(null, { fetchPosts })(PostsIndex);