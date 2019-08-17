import React from "react";
import { Card, Grid } from "semantic-ui-react";
// import { Grid } from "semantic-ui-react";

function Person(props) {
  const { name, birth_year, gender, height } = props.person;

  // console.log(name);
  return (
    <Grid.Column>
      <Card>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className="date">Birth year: {birth_year}</span>
          </Card.Meta>
          <Card.Description>
            <p>Sex: {gender}</p>
            <p>Height: {height}</p>
          </Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}

export default Person;
