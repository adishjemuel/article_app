import React, {useState} from "react";
import ArticleNavbar from "../shared/ArticleNavbar";
const EditCommentForm = (props) => {
  const [comment, setComment] = useState(props.comment)
  console.log(props.articleId);
  if (props.user)
    return (
      <>
        <ArticleNavbar user={props.user} token={props.token} />
        <div class="container mt-4">
          <div class="row">
            <div class="col-3"> </div>
            <div class="mb-3 col-6">
              <form
                action={`/articles/${props.articleId}/comments/${props.commentId}`}
                method="post"
              >
                <input name="utf8" type="hidden" value="&#x2713;" />
                <input name="_method" type="hidden" value="put" />
                <input
                  name="authenticity_token"
                  type="hidden"
                  value={props.token}
                />
                <textarea
                  value={comment} 
                  onChange={(event) => setComment(event.target.value)}
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="comment[body]"
                ></textarea>
                <div className="pt-2">
                  <button type="submit" class="btn btn-primary">
                    Update Comment
                  </button>
                </div>
              </form>
            </div>
            <div class="col"> </div>
          </div>
        </div>
      </>
    );
};

export default EditCommentForm;
