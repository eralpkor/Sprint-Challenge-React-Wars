import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Person from "./components/Person/Person";
import { Grid } from "semantic-ui-react";

import Btn from "./components/Button/Btn";
import uuid from "./components/Key/Key";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [state, setState] = useState([]); // []
  const [page, setPage] = useState(1);
  const [charCount, setCharCount] = useState();

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${page}`)
      .then(result => {
        // console.log(result.data.results);
        let data = result.data.results;
        let count = result.data.count;
        setState(data);
        setCharCount(count);
      })
      .catch(err => console.log(`Sorry error ${err}`));
  }, [page]);

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  return (
    <div className="App">
      <Btn page={page} prevPage={prevPage} nextPage={nextPage} />

      <Grid container columns={3}>
        {state.length
          ? state.map(person => {
              return <Person key={uuid()} person={person} />; // return Person component
            })
          : "Loading..."}
      </Grid>
    </div>
  );
};

export default App;
