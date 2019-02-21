import React from "react";
// import Jumbotron from "../components/jumbotron";
import Wrapper from "../components/wrapper";
import Footer from "../components/footer";
import Container from "../components/container";
import stickyNote from "../components/stickyNote";

function noteBoard() {
  return (
    <div>
      <Container>
        <Wrapper>
         <stickyNote />
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
}

export default noteBoard;
