import React from "react";
import classes from "./Pokecard.module.css";

const Pokecard = props => {
  let ImagePath = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

  return (
    <div className={classes.Pokecard}>
      <h3 className={classes.PokecardTitle}>{props.name}</h3>
      <div className={classes.PokecardImg}>
        <img
          src={`${ImagePath}${props.addZeros(props.id)}.png`}
          alt={props.name}
        />
      </div>
      <div className={classes.PokecardData}>
        <p>Type: {props.type}</p>
        <p>Type: {props.exp}</p>
      </div>
    </div>
  );
};

export default Pokecard;
