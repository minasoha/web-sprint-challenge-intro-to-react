import React, { useState, useEffect} from "react";
import styled from "styled-components";





export default function Character(props){

    const { name, gender, height, mass, birthYear, eyeColor, hairColor, skinColor } = props;

    const Text = styled.p`
    margin: 0px;
    
  `

    

    return(
        <div>
            <h3>{name}</h3>
            <div className="dropDown">
                <Text>
                    <p>gender: {gender}</p>
                    <p>height: {height}</p>
                    <p>Mass: {mass}</p>
                    <p>Birth Year: {birthYear}</p>
                    <p>Eye Color: {eyeColor}</p>
                    <p>Hair Color: {hairColor}</p>
                    <p>Skin Color: {skinColor}</p>
                </Text>
            </div>
        </div>
    )








}
