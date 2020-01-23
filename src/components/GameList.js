import React from 'react';
import GameItem from './GameItem';
import '../GameList.css'

const renderGames = (props) => {
    return props.games.map((game) => {
        return (
            <div>
                <GameItem
                    key={game.id}
                    gameId={game.id}
                    name={game.name}
                    description={game.description}
                    image={game.image}
                    handleClick={props.handleClick}
                />
            </div>
        )
    })
}

const GameList = (props) => {
    return (
        <ul className="flex-container">
            {
                renderGames(props)
            }
        </ul>
    );
}

export default GameList;