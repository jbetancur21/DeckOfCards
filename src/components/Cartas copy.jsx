import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import IdPlayerContext from "../context/IdPlayerContext";
import styles from "../estilos/cartas.css";

const Cartas = ({ playerOne, playerTwo }) => {
  const { IdPlayerOne, IdPlayerTwo } = useContext(IdPlayerContext);
  const [deckPlayerOne, setDeckPlayerOne] = useState([]);
  const [deckPlayerTwo, setDeckPlayerTwo] = useState([]);
  const [ternaCartas, setTernaCartas] = useState([]);
  const [aux, setAux] = useState(0);
  const [winner, setWinner] = useState([{ terna: 0 }, { cuarta: 0 }]);

  const getCard = async () => {
    const url = `https://deckofcardsapi.com/api/deck/${IdPlayerOne}/draw/?count=1`;
    const { data } = await axios.get(url);

    let contador = 0;
    for (let i = 0; i < deckPlayerOne.length; i++) {
      for (let j = 0; j < 10; j++) {
        if (deckPlayerOne[i].value === deckPlayerOne[j].value) {
          if (deckPlayerOne[i].suit !== deckPlayerOne[j].suit) {
            contador++;
            console.log("Soy el contador: " + contador);
          }
        }
      }

      setAux(contador);
      console.log("Soy el Estado: " + aux);

      if (aux === 3) {
        setWinner({ terna: winner.terna + 1 }, { cuarta: winner.cuarta });
      } else if (aux === 4) {
        setWinner({ terna: winner.terna }, { cuarta: winner.cuarta + 1 });
      }
    }
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
      <h2 className="styles.Jugador1">{playerOne}</h2>
      {deckPlayerOne.map((mazoUno) => (
        <img className="Cartas-1" key={mazoUno.code} src={mazoUno.image} />
      ))}
      <h2 className="Jugador2">{playerTwo}</h2>
      {deckPlayerTwo.map((mazoDos) => (
        <img className="Cartas-2" key={mazoDos.code} src={mazoDos.image} />
      ))}
      <button className="botonTraer" onClick={() => getCard()}>
        Pedir Carta
      </button>
    </div>
  );
};

export default Cartas;
