import React, { createContext, useState } from "react";
import IdPlayer from "../data/IdPlayers";

const IdPlayerContext = createContext();

//PREGUNTAR SI NO ES REDUNDANTE LLAMAR EL SET DE CADA ESTADO DENTRO DE CADA FUNCION
//PREGUNTAR SI UN CONTEXTO PUEDE RECIBIR PARAMETROS


const IdPlayerProvider = ({ children }) => {
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

  const data = { IdPlayerOne, IdPlayerTwo };
  return (
    <IdPlayerContext.Provider value={data}>
      {children}
    </IdPlayerContext.Provider>
  );
};

export default IdPlayerContext;
export { IdPlayerProvider };
