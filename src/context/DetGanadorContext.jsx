import { createContext, useContext, useState } from "react";
import IdPlayerContext from "../context/IdPlayerContext";
import axios from "axios";

const DetGanadorContext = createContext();

const DetGanadorProvider = ({ children }) => {
  const { IdPlayerOne, IdPlayerTwo } = useContext(IdPlayerContext);
  const [winner, setWinner] = useState([]);
  const [WinnerTwo, setWinnerTwo] = useState([]);
  const [deckPlayerOne, setDeckPlayerOne] = useState([]);
  const [deckPlayerTwo, setDeckPlayerTwo] = useState([]);

  const getCard = async () => {
    //JUGADOR UNO --------------------------------------------------------------------------
    const url = `https://deckofcardsapi.com/api/deck/${IdPlayerOne}/draw/?count=1`;
    const { data } = await axios.get(url);

    setWinner(0);
    console.log(data.cards);
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
    while (positions.indexOf(x) !== -1) {
      x = Math.floor(Math.random() * (9 - 0 + 1) + 0);
    }
    deckPlayerOne.splice(x, 1, data.cards[0]);
    getCardPlayerTwo();
  };

  ///PLAYER TWO ----------------------------------------------------------------------------
  const getCardPlayerTwo = async () => {
    const url = `https://deckofcardsapi.com/api/deck/${IdPlayerTwo}/draw/?count=1`;
    const { data } = await axios.get(url);

    setWinnerTwo(0);
    console.log(data.cards);
    let positions = [];

    for (let i = 0; i < deckPlayerTwo.length; i++) {
      for (let j = 0; j < deckPlayerTwo.length; j++) {
        if (
          deckPlayerTwo[i].value === deckPlayerTwo[j].value &&
          deckPlayerTwo[i].suit !== deckPlayerTwo[j].suit
        ) {
          if (positions.indexOf(j) === -1) {
            positions.push(j);
          }
        }
      }
    }
    setWinnerTwo(positions.sort());

    let x = 0;
    while (positions.indexOf(x) !== -1) {
      x = Math.floor(Math.random() * (9 - 0 + 1) + 0);
    }
    deckPlayerTwo.splice(x, 1, data.cards[0]);
  };

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

  const data = {
    getDeckPlayerOne,
    getDeckPlayerTwo,
    getCard,
    deckPlayerOne,
    deckPlayerTwo,
  };

  return (
    <DetGanadorContext.Provider value={data}>
      {children}
    </DetGanadorContext.Provider>
  );
};
export default DetGanadorContext;
export { DetGanadorProvider };
