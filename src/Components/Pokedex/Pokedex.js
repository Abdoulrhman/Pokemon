import React, { Component } from "react";
import classes from "./Pokedex.module.css";
import Pokecard from "../Pokecard/Pokecard";

class Pokedex extends Component {
  addZeros = number => {
    return number <= 999 ? `00${number}`.slice(-3) : number;
  };
  render() {
    return (
      <div className={classes.Pokedex}>
        <p>Total Power is {this.props.exp}</p>
        {this.props.isWinner ? (
          <h3 className={classes.Winner}>Winner</h3>
        ) : (
          <h3 className={classes.Losser}>Losser</h3>
        )}
        <div className={classes.PokedexCard}>
          {this.props.pokemon.map(p => (
            <Pokecard
              key={p.id}
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
              addZeros={this.addZeros}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
