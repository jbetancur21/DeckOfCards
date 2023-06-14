import React, { createContext, useState } from "react";
import IdPlayer from "../data/IdPlayers";

const IdPlayerContext = createContext();


const IdPlayerProvider = ({ children }) => {

  const [playerOne, setPlayerOne] = useState('')
  const [playerTwo, setPlayerTwo] = useState('')
  const [flagButton, setFlagButton] = useState(false)


  const getIdPlayerOne = ()=>{
    IdPlayer().then((newIdPLayer) => {
      setIdPlayerOne(newIdPLayer.deck_id);
    })
  }
  const getIdPlayerTwo = ()=>{
    IdPlayer().then((newIdPLayer) => {
      setIdPlayerTwo(newIdPLayer.deck_id);
    })
  }

  const [IdPlayerOne, setIdPlayerOne] = useState(getIdPlayerOne);
  const [IdPlayerTwo, setIdPlayerTwo] = useState(getIdPlayerTwo);

  const data = { IdPlayerOne, IdPlayerTwo,playerOne, setPlayerOne, playerTwo, setPlayerTwo,flagButton,setFlagButton};
  return (
    <IdPlayerContext.Provider value={data}>
      {children}
    </IdPlayerContext.Provider>
  );
};

export default IdPlayerContext;
export { IdPlayerProvider };
