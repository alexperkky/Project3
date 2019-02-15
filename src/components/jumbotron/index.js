import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import "../jumbotron/style.css"

const jumbotron = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">{props.children}</h1>
        <p className="lead">{props.lead}</p>
        <hr className="my-2" />
        <p>{}</p>
        <p className="lead">
          <Button color="primary" >Sign-In</Button>
        </p>
        <p className="lead">
          <Button color="success">Create Account</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default jumbotron;