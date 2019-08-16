import React, { useState } from "react";
import { Card, Icon, Image } from "semantic-ui-react";

function Person(props) {
  return (
    <Card>
      {/* <Image src="/images/avatar/large/matthew.png" wrapped ui={false} /> */}
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>
          <span className="date">Birth year: {props.birth_year}</span>
        </Card.Meta>
        <Card.Description>
          <p>Sex: {props.gender}</p>
          <p>Height: {props.height}</p>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default Person;
