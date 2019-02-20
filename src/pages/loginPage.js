import React from "react";
import Jumbotron from "../components/jumbotron";
import Wrapper from "../components/wrapper";
import Footer from "../components/footer";
import Container from "../components/container";

function loginPage() {
  return (
    <div>

      <form method="post" action="/login">
        <h2 class="sr-only">Login Form</h2>
        <div class="form-group">
          <input class="form-control" name="username" placeholder="Email" id="loginEmail" />
            </div>
          <div class="form-group">
            <input class="form-control" type="password" name="password" placeholder="Password" id="loginPassword" />
            </div>
            <div class="form-group">
              <button class="btn btn-primary btn-block" type="submit" id="login">Log In</button>
            </div>
      </form>

    <Footer />
    </div >
  );
}

export default loginPage;
