import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import IdPlayerContext from "../context/IdPlayerContext";
import DetGanadorContext from "../context/DetGanadorContext";


const Cartas = (/* { playerOne, playerTwo } */) => {
  const { IdPlayerOne, IdPlayerTwo,playerTwo,playerOne,flagButton } = useContext(IdPlayerContext);
  const {getDeckPlayerOne, getDeckPlayerTwo,getCard,deckPlayerOne,deckPlayerTwo} = useContext(DetGanadorContext)

  useEffect(() => {
    getDeckPlayerOne();
    getDeckPlayerTwo();
  }, []);

  return (
    <div>
      <h2>{playerOne}</h2>
      {deckPlayerOne.map((mazoUno) => (
        <img key={mazoUno.code} src={mazoUno.image} />
      ))}
      <h2>{playerTwo}</h2>
      {deckPlayerTwo.map((mazoDos) => (
        <img key={mazoDos.code} src={mazoDos.image} />
      ))}
      {flagButton?<button className="botonTraer" onClick={getCard} hidden>
        Pedir Carta
      </button>:<button className="botonTraer" onClick={getCard}>
      Pedir Carta
      </button>}
    </div>
  );
};

export default Cartas;
