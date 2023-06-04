import { useState } from 'react';
import '../estilos/Jugadores.css';
import { GiCardKingDiamonds } from 'react-icons/gi';
import {Link } from "react-router-dom";


const Jugadores = ({setPlayerOne,setPlayerTwo}) => {
    const [users, setUsers] = useState([])

    const handlerChange = (e) =>{
        setUsers({...users,[e.target.name]:e.target.value})
    }

    const handlerSubmit = () =>{
        setPlayerOne(users.playerOne)
        setPlayerTwo(users.playerTwo)
    }


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
        <GiCardKingDiamonds className="jugador-icon" />
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
        <GiCardKingDiamonds className="jugador-icon" />
      </div>
      <Link onClick={handlerSubmit} className="botonLogin" to="/Cartas">
        Login
      </Link>
    </div>
  );
};

export default Jugadores;
