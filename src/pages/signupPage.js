import React from "react";
import Jumbotron from "../components/jumbotron";
import Wrapper from "../components/wrapper";
import Footer from "../components/footer";
import Container from "../components/container";

function signupPage() {
  return (
    <div>
      <Container>
        <Wrapper>
          <Jumbotron>
            <h1 className="display-3">VoiceStickies</h1>
            <p className="lead">
              An app that records your voice and translates to text
            </p>
            <p className="lead">
              Please make an account or sign-in to an existing
            </p>
          </Jumbotron>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
}

export default signupPage;
