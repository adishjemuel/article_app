import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const ArticleNavbar = (props) => {
  return (
    <nav class="navbar navbar-expand-lg bg-light sticky-top">
      <div class="container-fluid ">
        <span class="navbar-brand mb-0 h1 ms-4" href="#">
          Dev Articles
        </span>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav me-auto">
            <a href="/" className="nav-link active me-2">
              {" "}
              Home{" "}
            </a>
            <form role="search" class="me-2 w-100">
              <input
                className="form-control "
                type="search"
                placeholder="Search Articles"
                aria-label="Search"
                name="title_or_highlight_cont"
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
            <div class="me-2 d-flex">
              <a href="/users/post" className="btn btn-link">
                Create Article{" "}
              </a>
              <a
                href="/users/profile"
                style={{ textDecoration: "none" }}
                className="btn btn-primary"
              >
                Profile
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
export default ArticleNavbar;
