import React from "react";
import './card-list.styles.css';
//prop is parameter we get from functional comp
export const CardList = props => {
    //children => pass between brakets of comp call
    return <div className= "card-list">
        {/*returns the return of passed func iterated over every arr's element*/}
        {/*unique keys let React know what elements need update if arr's elements value changes */}
        {props.monsters.map(monster => (
            <h1 key={monster.name}> {monster.name} </h1>
        ))}
    </div>;
};