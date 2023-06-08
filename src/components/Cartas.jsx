import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import IdPlayerContext from "../context/IdPlayerContext";

const Cartas = ({ playerOne, playerTwo }) => {
  
  const { IdPlayerOne, IdPlayerTwo } = useContext(IdPlayerContext);

  const [deckPlayerOne, setDeckPlayerOne] = useState([]);
  const [deckPlayerTwo, setDeckPlayerTwo] = useState([]);

  useEffect(() => {
    const getDeckPlayerOne = async () => {
      const url = `https://deckofcardsapi.com/api/deck/${IdPlayerOne}/draw/?count=10`;
      const { data } = await axios.get(url);
      setDeckPlayerOne(data.cards);
    };
    const getDeckPlayerTwo = async () => {
      const url = `https://deckofcardsapi.com/api/deck/${IdPlayerTwo}/draw/?count=10`;
      const { data } = await axios.get(url);
      setDeckPlayerTwo(data.cards);
    };
    getDeckPlayerOne();
    getDeckPlayerTwo();
  }, []);

  return (
    <div>
      <h2>{playerOne}</h2>
      {deckPlayerOne.map(mazoUno=>(
        <img key={mazoUno.code} src={mazoUno.image} />
      ))}
      <h2>{playerTwo}</h2>
      {deckPlayerTwo.map(mazoDos=>(
        <img key={mazoDos.code} src={mazoDos.image} />
      ))}
    </div>
  );
};

export default Cartas;
