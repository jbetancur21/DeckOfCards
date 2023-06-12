import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import IdPlayerContext from "../context/IdPlayerContext";
import DetGanadorContext from "../context/DetGanadorContext";


const Cartas = ({ playerOne, playerTwo }) => {
  const { IdPlayerOne, IdPlayerTwo } = useContext(IdPlayerContext);
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
      <button className="botonTraer" onClick={getCard}>
        Pedir Carta
      </button>
    </div>
  );
};

export default Cartas;
