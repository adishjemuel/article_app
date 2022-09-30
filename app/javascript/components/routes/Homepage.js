import React, { useState } from "react";
import PropTypes from "prop-types";
import ArticleNavbar from "../shared/ArticleNavbar";
const Homepage = (props) => {
  const [articles, setArticles] = useState(props.articles);
  const [authors, setAuthors] = useState(props.authors);
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(props.page);
 
  const content = articles.map((article, index) => (
    <div key={article.id} class="container">
      <div class="row">
        <div class="col-3"></div>
        <div class="jumbotron col-6">
          <h1 class="display-6">
            < a href={`/articles/${article.id}`}> {article.title} </a>
          </h1>
          <p class="lead">{article.highlight}</p>
          <figcaption class="blockquote-footer">
            <i class="bi bi-person-fill mx-2"></i>
            {authors[index].username}
          </figcaption>
          <hr class="my-4" />
        </div>
      </div>
    </div>
  ));

  const pagesButton = Array(props.pages)
    .fill(1)
    .map((el, index) => (
      <form action={`/articles`} method="get">
        <li
          className={`page-item ${index + 1 == currentPage ? "active" : ""}`}
          key={index}
        >
          <input name="page" value={index + 1} style={{ display: "none" }} />
          <button type="submit" class="page-link">
            {index + 1}
          </button>
        </li>
      </form>
    ));

    console.log(props.user)
  return (
    <div>
      <ArticleNavbar
        user={props.user}
      />
      <div class="container text-center mb-4">
        <div class="row">
          <div class="col"></div>
          <div class="col-6">
            <figure class="mt-4">
              <blockquote class="blockquote">
                <h1> Developer Articles </h1>
                <small class="text-muted">
                  {" "}
                  Written by various developers and software engineers who have
                  meaningful works and thoughts that can be helpful to others.
                </small>
              </blockquote>
              <figcaption class="blockquote-footer">
                Developers around the world
              </figcaption>
            </figure>
          </div>
          <div class="col"></div>
        </div>
      </div>
      {content}
      {props.pages > 1 && (
        <div class="container">
          <div class="row">
            <div class="col-3"></div>
            <nav aria-label="Page navigation example" class="col-6">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                {pagesButton}
                <li class="page-item">
                  <a class="page-link" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div class="col"></div>
          </div>
        </div>
      )}
    </div>
  );
};
Homepage.propTypes = {
  articles: PropTypes.array,
};
export default Homepage;
