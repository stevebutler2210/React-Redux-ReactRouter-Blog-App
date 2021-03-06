import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={"posts/" + post.id}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>All Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
        <div className="text-xs">
          <Link to="/posts/new" className="btn btn-primary">
            New Post
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

// passing { fetchPosts: fetchPosts } or { fetchPosts } === mapDispatchToProps
// function to map fetchPosts to props
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);