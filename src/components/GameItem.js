import React from 'react';
import { Link } from "react-router-dom";
import { Grid } from 'semantic-ui-react'
import '../GameList.css'

const GameItem = (props) => {

    return (
        <Link to={`/games/${props.gameId}`}>
            <li className="flex-item" key={props.gameId} >
                <img src={props.image} alt=" " width="250" height="250" />
            </li>
        </Link>
    )
}

export default GameItem;