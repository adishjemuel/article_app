import React from "react";

const CommentForm = (props) => { 
  console.log(props.articleId)
  return (
    <>
      <div class="mb-3">
        <form action={`/articles/${props.articleId}/comments`} method="post">
              <input name="utf8" type="hidden" value="&#x2713;" />
              <input
                name="authenticity_token"
                type="hidden"
                value={props.token}
              />
        <textarea
          placeholder="Add any interesting idea or inquiry regarding the article"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3" 
          name="comment[body]"
        ></textarea>
        <div className="pt-2">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
        </form>
      </div>
    </>
  );
};

export default CommentForm;
