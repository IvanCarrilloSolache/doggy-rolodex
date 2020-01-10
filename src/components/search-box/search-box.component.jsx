import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({placeholder, handleChange}) => (
    /*onChange fires syncteric event (e) when input value is change*/ 
    <input 
    className="search"
    type="search" 
    placeholder={placeholder}
    /*setState is asynchronous, a second argument function allows to get response right after setting state*/
    onChange={handleChange}
  />
);