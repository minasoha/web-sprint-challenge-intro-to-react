import React, { useState, useEffect} from "react";
import styled from "styled-components";





export default function Character(props){

    const { character } = props;

    const Custom = styled.div`
        display: flex;
        justify-content: left;
        padding-left: 100px;

    `
    const Text = styled.div`
    display: flex;
    
    justify-content: center;
    flex-flow: column;
    text-align: center;
    align-items: center;
    width: 600px;
    border: 15px solid green;
    margin: 20px;
    
    
    

  `
    const Drop = styled.div`
    display: flex;
    justify-content: right;
    text-shadow: 2px 3px 0px #87A7AD;
    padding-right: 50px;
    

    
    
    ` 
    const [showMore, setShowMore] = useState(false)
    

    return(
        <div>
            <Custom>
            <h3>{character.name}</h3>
            </Custom>
            
            <Drop Text= "TEXT" className="dropDown" onClick = {() => {setShowMore(!showMore) }}>
                
                <button>Show More ⤵ </button>
                
            </Drop>
            {showMore && (<Text >
                    <p>gender: {character.gender}</p>
                    <p>height: {character.height}</p>
                    <p>Mass: {character.mass}</p>
                    <p>Birth Year: {character.birthYear}</p>
                    <p>Eye Color: {character.eyeColor}</p>
                    <p>Hair Color: {character.hairColor}</p>
                    <p>Skin Color: {character.skinColor}</p>
                </Text>)}
        </div>
    )








}
