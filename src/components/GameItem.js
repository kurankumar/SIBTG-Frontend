import React from 'react';
import { Link } from "react-router-dom";

const GameItem = (props) => {

    return <li key={props.gameId} 
    onClick={() => props.handleClick(props.gameId)}>
        <Link to={`/games/${props.gameId}`}>
        <img src={props.image} alt=" " width= "250" height = "250"/>
        </Link>
    </li>
}

export default GameItem;