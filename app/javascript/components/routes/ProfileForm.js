import React, { useState } from "react";
import ArticleNavbar from "../shared/ArticleNavbar";

const Register = (props) => {
  const [username, setUsername] = useState(props.user.username);
  const [firstName, setFirstName] = useState(props.user.first_name);
  const [lastName, setLastName] = useState(props.user.last_name);
  return (
    <>
      {" "}
      <ArticleNavbar user={props.user} token={props.token} />
      <div class="container mt-4">
        <div class="row">
          <div class="col"></div>
          <div class="col-6">
            <form action="/users" method="post">
              <input name="_method" type="hidden" value="put" />
              <input name="utf8" type="hidden" value="&#x2713;" />
              <input
                name="authenticity_token"
                type="hidden"
                value={props.token}
              />
              <input name="commit" type="hidden" value="Update" />
              <div class="mb-3">
                <label class="form-label">Username</label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="usernameHelp"
                  name="user[username]"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
                <div id="usernameHelp" class="form-text">
                  It is what the users see when you post an article. Make sure
                  it is cool
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="user[first_name]"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="user[last_name]"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                />
              </div>
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
                  value={props.user.email}
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
                  name="user[current_password]"
                />
                <div id="passwordHelp" class="form-text">
                  You need to input your password to make changes
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Update Account
              </button>
            </form>
          </div>
          <div class="col"> </div>
        </div>
      </div>
    </>
  );
};

export default Register;
