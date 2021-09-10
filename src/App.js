import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character'
import SearchBox from './components/search';
import styled from 'styled-components';




const App = () => {

  const [ searchField , setSearchfield ] = useState('');
  const [ results, setResults ] = useState([]);
  // const [name, setName] = useState('');
  // const [gender, setGender] = useState('');
  // const [height, setHeight] = useState('');
  // const [mass, setMass] = useState('');
  // const [birthYear, setBirthYear] = useState('');
  // const [eyeColor, setEyeColor] = useState('');
  // const [hairColor, setHairColor] = useState('');
  // const [skinColor, setSkinColor] = useState('');

  const Style = styled.div`
  
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 50px;

  `


  useEffect(() =>{
    axios.get('https://swapi.dev/api/people/')
    .then(resp => {
      
      setResults(resp.data);
      // setName(resp.data.name);
      // setGender(resp.data.gender);
      // setHeight(resp.data.height);
      // setMass(resp.data.mass);
      // setBirthYear(resp.data.birthYear);
      // setEyeColor(resp.data.eyeColor);
      // setHairColor(resp.data.hairColor);
      // setSkinColor(resp.data.skinColor);
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
      <Style>
        <div>
          <SearchBox placeholder = "Search..." handleChange={(e) => SearchBox({searchField:e.target.value})}/>
        </div>
      </Style>
      <h1 className="Header">React Wars </h1>
      {
      // eslint-disable-next-line array-callback-return
      results.map(props => {
        return (
        <div className="info">
        <Character name={props.name} gender={props.gender} height={props.height} mass={props.mass} birthYear={props.birth_year} eyeColor={props.eye_color} hairColor={props.hair_color} skinColor={props.skin_color}/>
        </div>)
      })
      }
      
    </div>
    
  );
}

export default App;
