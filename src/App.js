import React, { useState, useEffect } from 'react';
import "./App.css";
import axios from 'axios';
import { baseURL } from './constants';
import HeroCard from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`${baseURL}`)
    .then(res => {
      setData(res.data)
      console.log(data);
    })
    
    .catch(err => console.error(err))
  },[])

      
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
        <HeroCard data={data} />
        
    </div>
  );
}

export default App;
