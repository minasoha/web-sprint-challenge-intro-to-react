import React from "react";
import styled from "styled-components";


const Style = styled.div`
  
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 50px;

  `

const SearchBox = (props) => {
    return(
        <Style>
        <input type='text'
        placeholder= {props.placeholder}
        onChange = {props.handleChange}
        value = {props.search}
        />
        </Style>
    )



}

export default SearchBox;