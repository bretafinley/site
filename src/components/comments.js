import React, { Component } from "react";
import ReactDisqusComments from "react-disqus-comments";

import * as constants from "../util/constants";

class Comments extends Component {

  constructor(props) {
    super(props);

    this.state = {
      toasts: []
    };

    this.notifyAboutComment = this.notifyAboutComment.bind(this);
    this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this);
  }

  onSnackbarDismiss() {
    const [, ...toasts] = this.state.toasts;
    this.setState({ toasts });
  }

  notifyAboutComment() {
    const toasts = this.state.toasts.slice();
    toasts.push({ text: "New comment available!" });
    this.setState({ toasts });
  }

  render() {
    const url = constants.SITE_URL + this.props.path;

    return (
      <ReactDisqusComments
        shortname={constants.DISQUS_SHORTNAME}
        identifier={this.props.title}
        title={this.props.title}
        url={url}
        category_id="12345"
        onNewComment={this.notifyAboutComment}
      />
    );
  }
}



export default Comments;