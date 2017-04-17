import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingle } from '../actions/index';

class PostsShow extends Component {
  componentWillMount() {
    this.props.fetchSingle(this.props.params.id);
  }

  render() {
    return <div>Show post {this.props.params.id}</div>;
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect({ post }, { fetchSingle })(PostsShow);