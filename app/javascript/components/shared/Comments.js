import React, { useState } from "react";
import CommentForm from "./CommentForm";
const Comments = (props) => {
  console.log(props.articleId);
  const [comments, setComments] = useState(props.comments);
  const articleComments = comments.map((element, index) => (
    <div key={element.id} className="card my-2">
      <div className="card-body">
        <h5 class="card-title mb-2">@{element[1].username} </h5>
        <p class="card-text"> {element[0].body} </p>
      </div>
    </div>
  ));
  console.log(comments)
  return (
    <div className="container pt-5">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
          <hr class="border border-secindary border-1 opacity-70" />
          <h4> Comments </h4>
          <CommentForm
            token={props.token}
            articleId={props.articleId}
          />
          {articleComments}
        </div>
        <div class="col"> </div>
      </div>
    </div>
  );
};

export default Comments;
