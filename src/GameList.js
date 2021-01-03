import React from 'react';
import PropTypes from 'prop-types';
import './GameList.css';

const GameList = (props) => {
  GameList.propTypes = {
    gameData: PropTypes.array.isRequired,
  }
  const {gameData} = props

  const games = gameData.map((game, index) => {
    return (
      <li className={"gameCard"} key={index}>
        <div className={"gameCard-content"}>
          <img className={"gameCard-picture"} alt=""></img>
          <div>{game.name}</div>
        </div>
        <div className={"gameCard-button"}>
          <div>{game.opinion}</div>
          {game.own && <div>Megvan</div>}
        </div>
      </li>
    )
  })
  return (
    <ul className={"cards"}>
      {games}
    </ul>
  )
};

export default GameList;