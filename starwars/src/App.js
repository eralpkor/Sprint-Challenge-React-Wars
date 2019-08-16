import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Person from "./components/Person/Person";
import { Grid } from "semantic-ui-react";
import uuid from "./components/Key/Key";
import Btn from "./components/Button/Btn";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [state, setState] = useState([]);
  // const [characters, charactersState] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(result => {
        console.log(result.data);
        let data = result.data.results;
        setState(data);
      })
      .catch(err => console.log(`Sorry error ${err}`));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      <Grid container columns={3}>
        {state.length
          ? state.map(person => (
              <Grid.Column key={uuid()}>
                <Person
                  name={person.name}
                  birth_year={person.birth_year}
                  height={person.height}
                  gender={person.gender}
                />
              </Grid.Column>
            ))
          : `Loading...`}
      </Grid>

      <Btn />
    </div>
  );
};

export default App;
