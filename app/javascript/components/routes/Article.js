import React  from "react";
import ArticleNavbar from "../shared/ArticleNavbar"; 
const Article = (props) => {
  if(props.article!=null){
  return (
    <>
      <ArticleNavbar />
      <div className="container">
        <div class="row">
          <div class="col-3"></div>
          <div class="col-6 text-center">
            <figure class="mt-4">
              <blockquote class="blockquote">
                <h1 className="display-5">{props.article.title}</h1>
                <small class="text-muted">
                  {props.article.highlight}

                </small>
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
    </>
  );}
  return null;
};

export default Article;
