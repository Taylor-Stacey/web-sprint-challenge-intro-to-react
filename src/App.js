import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [heroData, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const StyledApp = styled.div``;
  const StyledDiv = styled.div``;

  return (
    <StyledApp className="App">
      <h1 className="Header">Characters</h1>
      <StyledDiv>
        {heroData.map((character, idx) => {
          return <Character props={character} />;
        })}
      </StyledDiv>
    </StyledApp>
  );
};

export default App;
