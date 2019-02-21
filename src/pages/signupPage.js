import React from "react";
import Jumbotron from "../components/jumbotron";
import Wrapper from "../components/wrapper";
import Footer from "../components/footer";
import Container from "../components/container";

function signupPage() {
  return (
    <div>
    <form method="post" action="/register" >
    <h2 class="text-center"> Voice Stickies </h2>



    < div class="form-group" >
      <label for="email">Email</label>
      <input class="form-control" type="email" name="email" placeholder="Email" id="inputEmail" />
    </div >

    <div class="form-group">
      <label for="password">Password</label>
      <input class="form-control" type="password" name="password" placeholder="Password" id="inputPassword" />
    </div>

    <div class="form-group">
      <label for="passwordMatch">Re-Enter Password</label>
      <input class="form-control" type="password" name="passwordMatch" placeholder="Re-Enter Password" />
    </div>

    <div class="form-group">
      <button id="register" class="btn btn-primary btn-block" type="submit">Sign Up</button>
    </div> 
    <a href="/login" class="already">You already have an account? Login here.</a>
  
    </form >
    <Footer />
    </div >
  );
}

export default signupPage;
