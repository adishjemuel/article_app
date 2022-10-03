import React from "react";
import ArticleNavbar from "../shared/ArticleNavbar";
const ArticleForm = (props) => {
  if (props.user)
    return (
      <>
        {" "}
        <ArticleNavbar user={props.user} token={props.token} />
        <div class="container mt-4">
          <div class="row">
            <div class="col"></div>
            <div class="col-6">
              <form action="/articles" method="post">
                <input name="utf8" type="hidden" value="&#x2713;" />
                <input
                  name="authenticity_token"
                  type="hidden"
                  value={props.token}
                />
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="article[title]"
                  />
                  <div id="emailHelp" class="form-text">
                    Think of your post title as a super short (but compelling!)
                    description — like an overview of the actual post in one
                    short sentence.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Summary
                  </label>
                  <textarea
                    rows="3"
                    class="form-control"
                    id="exampleInputPassword1"
                    name="article[highlight]"
                  >
                    {""}
                  </textarea>
                  <div id="passwordHelp" class="form-text">
                    Enter a summary of what will be the content of your article
                    in one to two paragraphs (depends on how much you can
                    share).
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Content</label>
                  <textarea
                    rows="10"
                    class="form-control"
                    id="body"
                    name="article[body]"
                  />
                  <div id="bodyHelp" class="form-text">
                    Write the overall content of your article here. Goodluck
                    fellow author!
                  </div>
                </div>
                <button type="submit" class="btn btn-primary mb-3">
                  Publish
                </button>
              </form>
            </div>
            <div class="col"> </div>
          </div>
        </div>
      </>
    );
};

export default ArticleForm;
