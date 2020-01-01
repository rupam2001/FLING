import React, { Component } from "react";
import CommentStyle from "./Comments.module.css";

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: ["hi", "hey", "hello"]
    };
  }

  render() {
    const commentList = this.state.comments.map(comment => (
      <div className={CommentStyle.everyComment}>{comment}</div>
    ));
    return <div className={CommentStyle.content}>{commentList}</div>;
  }
}

export default Comments;
