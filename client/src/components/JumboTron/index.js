import React, { useContext } from "react";
import { Segment, Container } from "semantic-ui-react";
import DevDataContext from "../../contexts/DevDataContext";
import './style.css'

export const Jumbotron = (props) => {
  const { devData } = useContext(DevDataContext);

  return (
    <Segment className="jumbo text-center">
      <div className="overlay"></div>
      <Container>
        <h1 className="greeting">Welcome to the portfolio page for</h1>
        <h1 className="greeting">{devData.fname} {devData.lname}</h1>
        <br />
        <br />
        <h2>
          Take a look around and you will find all kinds of cool things I have
          put together!
        </h2>
      </Container>
    </Segment>
  );
}