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
      setDeckPlayerOne(data);
    };
    const getDeckPlayerTwo = async () => {
      const url = `https://deckofcardsapi.com/api/deck/${IdPlayerTwo}/draw/?count=10`;
      const { data } = await axios.get(url);
      setDeckPlayerTwo(data);
    };
    getDeckPlayerOne();
    getDeckPlayerTwo();
  }, []);

  return (
    <div>
      <h2>{playerOne}</h2>
      <h3>{IdPlayerOne}</h3>
      {deckPlayerOne.map(mazoUno=>(
        <img src={mazoUno.cards.image} alt="" />
      ))}
      <h2>{playerTwo}</h2>
      <h3>{IdPlayerTwo}</h3>
    </div>
  );
};

export default Cartas;
