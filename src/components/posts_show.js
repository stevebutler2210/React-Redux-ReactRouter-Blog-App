import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchSingle, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then(() => {
        this.context.router.push('/');
      });
  }

  componentWillMount() {
    this.props.fetchSingle(this.props.params.id);
  }

  render() {
    const { post } = this.props;
    
    if (!post) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
        <Link to ='/'>Return to Index Page</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}>
          Delete Post
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchSingle, deletePost })(PostsShow);