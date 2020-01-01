import React, { Component } from "react";
import CommentStyle from "./Comments.module.css";

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: ["hi", "hey", "hello"],
      userComment: ""
    };
  }
  handleUserCommentChange = event => {
    this.setState({ userComment: event.target.value });
  };

  handleCommentPost = event => {
    event.preventDefault();
  };

  render() {
    const commentList = this.state.comments.map((comment, index) => (
      <div className={CommentStyle.everyComment} key={index}>
        {comment}
      </div>
    ));
    return (
      <React.Fragment>
        <form>
          <textarea
            className={CommentStyle.txtArea}
            value={this.state.userComment}
            onChange={this.handleUserCommentChange}
          />
          <button
            className={CommentStyle.commentBtn}
            onClick={this.handleCommentPost}
          >
            Post
          </button>
        </form>
        <div className={CommentStyle.content}>{commentList}</div>
      </React.Fragment>
    );
  }
}

export default Comments;
