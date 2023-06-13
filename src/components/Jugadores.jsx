import { useState,useContext } from "react";
import "../estilos/Jugadores.css";
import { GiCardKingDiamonds } from "react-icons/gi";
import { Link } from "react-router-dom";
import styles from "../estilos/Header.css";
import IdPlayerContext from "../context/IdPlayerContext";
/*  */
const Jugadores = (/* { setPlayerOne, setPlayerTwo } */) => {
  const { setPlayerOne,  setPlayerTwo } = useContext(IdPlayerContext);
  const [users, setUsers] = useState([]);

  const handlerChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handlerSubmit = () => {
    setPlayerOne(users.playerOne);
    setPlayerTwo(users.playerTwo);
  };

  return (
    <div className="jugadores-container">
      <div className="jugador">
        <label className="jugador-label">Player 1</label>
        <input
          onChange={handlerChange}
          name="playerOne"
          placeholder="Player One"
          type="text"
          className="jugador-input"
        />
      </div>
      <div className="jugador">
        <label className="jugador-label">Player 2</label>
        <input
          onChange={handlerChange}
          name="playerTwo"
          placeholder="Player two"
          type="text"
          className="jugador-input"
        />
      </div>
      <Link onClick={handlerSubmit} className="botonLogin" to="/Cartas">
        Login
      </Link>
    </div>
  );
};

export default Jugadores;
