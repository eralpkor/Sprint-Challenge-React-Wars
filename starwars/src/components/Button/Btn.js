import React from "react";
import { Button, Segment } from "semantic-ui-react";
import { Container } from "semantic-ui-react";

function Btn(props) {
  return (
    <Container>
      <Segment inverted>
        <h1 className="Header">React Wars</h1>
        <div>
          {props.page > 1 && (
            <Button inverted onClick={() => props.prevPage()} color="purple">
              Previous
            </Button>
          )}
          <p>Page: {props.page}</p>
          <Button inverted onClick={() => props.nextPage()} color="orange">
            Next
          </Button>
        </div>
      </Segment>
    </Container>
  );
}

export default Btn;
