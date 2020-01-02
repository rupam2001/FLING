import React, { Component } from "react";
import CommentStyle from "./Comments.module.css";
import axios from "axios";

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      userComment: "",
      commentId: 0,
      userId: 0,
      commentCount: 5
    };
  }
  handleUserCommentChange = event => {
    this.setState({ userComment: event.target.value });
  };

  handleCommentPost = event => {
    event.preventDefault();
    this.prepareState(this.props.commentId, this.props.userId);
  };

  prepareState = (newCommentId, newUserId, newCommentCount) => {
    this.setState(
      {
        commentId: newCommentId,
        userId: newUserId,
        commentCount: newCommentCount
      },
      () => {
        axios
          .post("https://jsonplaceholder.typicode.com/posts", this.state)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
      }
    );
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        this.setState({ comments: response.data });
        console.log(response.data);
      })
      .catch(error => {});
  }

  updateComments = () => {
    this.setState(
      prevState => {
        return { commentCount: prevState.commentCount + 5 };
      },
      () => {
        axios
          .post("https://jsonplaceholder.typicode.com/posts", this.state)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
      }
    );
  };

  render() {
    const commentList = this.state.comments.map((comment, index) => (
      <li className={CommentStyle.everyComment} key={index}>
        {comment.title}
      </li>
    )); //comment.title

    return (
      <React.Fragment>
        <form onSubmit={this.submitHandler} className={CommentStyle.formStyle}>
          <textarea
            className={CommentStyle.txtArea}
            value={this.state.userComment}
            onChange={this.handleUserCommentChange}
          />
          <button
            type="submit"
            className={CommentStyle.commentBtn}
            onClick={this.handleCommentPost}
          >
            Post
          </button>
        </form>
        <div className={CommentStyle.content}>
          <ol>{commentList}</ol>
          <button
            onClick={this.updateComments}
            className={CommentStyle.readMoreBtn}
          >
            Read More
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Comments;
