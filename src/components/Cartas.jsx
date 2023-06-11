import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import IdPlayerContext from "../context/IdPlayerContext";

const Cartas = ({ playerOne, playerTwo }) => {
  const { IdPlayerOne, IdPlayerTwo } = useContext(IdPlayerContext);
  const [deckPlayerOne, setDeckPlayerOne] = useState([]);
  const [deckPlayerTwo, setDeckPlayerTwo] = useState([]);
  const [aux, setAux] = useState(0);
  const [winner, setWinner] = useState([]);

  const getCard = async () => {
    const url = `https://deckofcardsapi.com/api/deck/${IdPlayerOne}/draw/?count=1`;
    const { data } = await axios.get(url);

    setWinner(0)
    let positions = [];
    for (let i = 0; i < deckPlayerOne.length; i++) {
      for (let j = 0; j < deckPlayerOne.length; j++) {
        if (
          deckPlayerOne[i].value === deckPlayerOne[j].value &&
          deckPlayerOne[i].suit !== deckPlayerOne[j].suit
        ) {
          if (positions.indexOf(j) === -1) {
            positions.push(j);
          }
        }
      }
    }
    setWinner(positions.sort());

    let x = 0;
    while(positions.indexOf(x) !== -1){
      x = Math.floor((Math.random() * (9 - 0 + 1)) + 0);
    }
    
    deckPlayerOne.splice(x,1,data.cards[0])

    console.log(x)
  };
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
  }, [1]);

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
      <button className="botonTraer" onClick={() => getCard()}>
        Pedir Carta
      </button>
    </div>
  );
};

export default Cartas;
