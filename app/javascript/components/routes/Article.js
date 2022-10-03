import React from "react";
import ArticleNavbar from "../shared/ArticleNavbar";
import Comments from "../shared/Comments";
const Article = (props) => {
  if (props.article != null) {
    console.log(props.comments);

    console.log(props.show_dropdowns);
    return (
      <>
        <ArticleNavbar user={props.user} />
        <div className="container">
          <div class="row">
            <div class="col-3"></div>
            <div class="col-6 text-center">
              <figure class="mt-4">
                <blockquote class="blockquote">
                  <h1 className="display-5">{props.article.title}</h1>
                  <small class="text-muted">{props.article.highlight}</small>
                </blockquote>
                <figcaption class="blockquote-footer">
                  {`${props.author.first_name}  ${props.author.last_name}`}
                </figcaption>
              </figure>
            </div>
            <div class="col"> </div>
          </div>
        </div>
        <div className="container">
          <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
              {" "}
              <p>{props.article.body}</p>{" "}
            </div>
            <div class="col"> </div>
          </div>
        </div>
        <Comments
          user={props.user}
          comments={props.comments}
          articleId={props.article.id}
          token={props.token}
        />
      </>
    );
  }
  return null;
};

export default Article;
