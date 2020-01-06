import React from "react";

import { Card } from "../card/card.component";
import './card-list.styles.css';

//prop is parameter we get from functional comp
export const CardList = props => (
    //children => pass between brakets of comp call
    <div className= "card-list">
        {/*map returns the return of passed func iterated over every arr's element*/}
        {/*unique keys let React know what elements need update if arr's elements value changes */}
        {props.robots.map(robot => (
            <Card key={robot.id} robot={robot} />
        ))}
    </div>
);