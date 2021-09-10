import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character'
import SearchBox from './components/search';





const App = () => {

  const [ searchField , setsearchfield ] = useState('');
  const [ results, setResults ] = useState([]);
  
  


  useEffect(() =>{
    axios.get('https://swapi.dev/api/people/')
    .then(resp => {
      console.log(resp)
      setResults(resp.data);
      

    }).catch(err =>{
      console.log(err);
    })
  }, []);







  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      
        <div>
          <SearchBox search = {searchField} placeholder = "Search..." handleChange={(e) => setsearchfield(e.target.value)}/>
        </div>
      
      <h1 className="Header">React Wars </h1>
      {
      results.filter(result =>{
        return result.name.toLowerCase().includes(searchField.toLowerCase());

        
      }).map(props => {
        const character = {
          name: props.name,
          gender: props.gender, 
          height: props.height,
          mass: props.mass,
          birthYear: props.birth_year,
          eyeColor: props.eye_color,
          hairColor: props.hair_color,
          skinColor: props.skin_color
        };
        return (
        <div className="info">
        <Character character={character}/>
        </div>)
      })
      }
      
    </div>
    
  );
}

export default App;
