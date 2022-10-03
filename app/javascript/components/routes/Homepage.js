import React, { useState } from "react";
import PropTypes from "prop-types";
import ArticleNavbar from "../shared/ArticleNavbar";
const Homepage = (props) => {
  const [articles, setArticles] = useState(props.articles);
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(props.page);
  console.log(props.articles);
  const content = articles.map((article, index) => (
    <div key={article[0].id} class="container">
      <div class="row">
        <div class="col-3"></div>
        <div class="jumbotron col-6">
          <h1 class="display-6">
            <a href={`/articles/${article[0].id}`}> {article[0].title} </a>
          </h1>
          <p class="lead">{article[0].highlight}</p>
          <figcaption class="blockquote-footer">
            <i class="bi bi-person-fill mx-2"></i>
            {article[1].username}
          </figcaption>
          {props.user.username == article[1].username && (
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Manage
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a
                    class="dropdown-item"
                    href={`/articles/${article[0].id}/edit`}
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <form
                    action={`/articles/${article[0].id}`}
                    method="post"
                  >
                    <input name="_method" type="hidden" value="delete" />
                    <input
                      name="authenticity_token"
                      type="hidden"
                      value={props.token}
                    />
                    <button class="dropdown-item" type="submit">
                      Delete
                    </button>
                  </form>
                </li>
              </ul>
            </div>
          )}
          <hr class="my-4" />
        </div>
      </div>
    </div>
  ));

  const pagesButton = Array(props.pages)
    .fill(1)
    .map((el, index) => (
      <form action={`/articles`} method="get" key={index}>
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

  console.log(props.user);
  return (
    <div>
      <ArticleNavbar user={props.user} token={props.token} />
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
