import React, { useEffect, useState } from "react";
import axios from "axios";

function GetNext() {
  const [characters, charactersState] = useState([]);

  useEffect(() => {
    Promise.all([getCharacters]).then(console.log("get shit", getCharacters()));

    // charactersState();
  }, []);

  function getCharacters(url) {
    axios
      .get("https://swapi.co/api/people/")
      .then(result => {
        // console.log("character result: ", result.data.next);
        const chars = result.data;
        let next = chars.next;
        let previous = chars.previous;
      })
      .catch(err => console.log(err));
  }

  return null;
}

export default GetNext;
