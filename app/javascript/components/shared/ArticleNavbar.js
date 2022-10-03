import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ArticleNavbar = (props) => {
  return (
    <nav class="navbar navbar-expand-lg bg-light sticky-top">
      <div class="container-fluid ">
        <span class="navbar-brand mb-0 h1 ms-4" href="#">
          Dev Articles
        </span>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav me-auto d-flex align-items-center">
            <a href="/" className="nav-link active me-2">
              {" "}
              Home{" "}
            </a>
            <form
              role="search"
              className="me-2 w-100 d-flex"
              action="/"
              method="get"
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search an article here"
                aria-label="Search"
                name="q[title_or_highlight_cont]"
              />
              <input
                className="btn btn-outline-success ms-2"
                type="submit"
                placeholder="Search"
              />
            </form>
          </div>
          {!props.user && (
            <div class="me-2 d-flex">
              <a href="/users/sign_in" className="btn btn-link">
                {" "}
                Sign In{" "}
              </a>
              <a
                href="/users/sign_up"
                style={{ textDecoration: "none" }}
                className="btn btn-primary"
              >
                {" "}
                Create Account{" "}
              </a>
            </div>
          )}
          {props.user && (
            <div class="me-4 d-flex align-items-center">
              <a href="/articles/new" className="btn btn-link">
                Create Article{" "}
              </a>
              <div class="dropstart">
                <i
                  class="bi bi-person-circle me-5"
                  style={{ fontSize: "24px" }}
                  role="button"
                  data-bs-toggle="dropdown"
                ></i>

                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/users/edit">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href={`/articles/?user_id=${props.user.id}`}>
                      Articles
                    </a>
                  </li>
                  <li>
                    <form
                      accept-charset="UTF-8"
                      action="/users/sign_out"
                      method="post"
                    >
                      <input name="_method" type="hidden" value="delete" />
                      <input name="utf8" type="hidden" value="&#x2713;" />
                      <input name="authenticity_token" type="hidden" value={props.token} />

                      <button class="dropdown-item" type="submit">
                        Log Out
                      </button>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
export default ArticleNavbar;
