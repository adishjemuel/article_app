import React from "react";
import ArticleNavbar from "../shared/ArticleNavbar";
const SignIn = (props) => {
  return (
    <>
      {" "}
      <ArticleNavbar />
      <div class="container mt-4">
        <div class="row">
          <div class="col"></div>
          <div class="col-6">
            <form action="/users/sign_in" method="post">
              <input name="utf8" type="hidden" value="&#x2713;" />
              <input
                name="authenticity_token"
                type="hidden"
                value={props.token}
              />
              <input name="commit" type="hidden" value="Log in" />
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="user[email]"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="user[password]"
                />
                <div id="passwordHelp" class="form-text">
                  Enter Valid Password
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Log In
              </button>
            </form>
          </div>
          <div class="col"> </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
