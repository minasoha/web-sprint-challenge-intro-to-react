import React from "react";
import styled from "styled-components";




const SearchBox = (props) => {
    return(
        <input type='search'
        className='search'
        placeholder={props.placeholder}
        onChange = {props.handleChange}
        />
    )



}

export default SearchBox;