import React from 'react';
import './cell.scss';

/**
 * @param id - string
 * @param title - string
 * @param owner - string
 * @param stars - number
 * @param timestamp - number
 * @param url - string
 * @param avatar - string
 * @param isFavorite - boolean
 * @param onPress = callback invoked when call is pressed
 * @param onAddFavorite - function, accepts id of repo to toggle favorite option
 */
function Cell(props: any) {
  return (
    <div className="rowContainer">
      <button
        onClick={() => props.onAddToFavorite(props.id)}
        className={`favoriteContainer ${
          props.isFavorite ? 'favoriteRepo' : ''
        }`}>
        <p>&#9829;</p>
      </button>
      <div onClick={props.onPress} className="rowContent">
        <img alt="github repo owner" src={props.avatar} />

        <p className="owner">{`${props.owner}/${props.title}`}</p>

        <div className="stars">
          <p>{props.stars}</p>
          <span>&#9733;</span>
        </div>
      </div>
    </div>
  );
}

export default Cell;
