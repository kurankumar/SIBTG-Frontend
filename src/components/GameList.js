import React from 'react';
import GameItem from './GameItem';

const GameList = (props) => {
  
  return (
    <ul>
      {
      	props.games.map((game) => {	
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
    </ul>
  );
}

export default GameList;