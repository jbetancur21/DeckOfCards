import { useEffect, useState } from 'react';
import './App.css';
import Cartas from './components/Cartas'
import Header from './components/Header';
import Jugadores from './components/Jugadores';
import { Route, Routes } from "react-router-dom";
import IdPlayer from './data/IdPlayers';
import axios from "axios";
import { IdPlayerProvider } from './context/IdPlayerContext';


function App() {
   const [playerOne, setPlayerOne] = useState('')
  const [playerTwo, setPlayerTwo] = useState('')

  return (
      <IdPlayerProvider>
        <Routes>
          <Route path="/" element={<Header/>}>
          <Route path="/" element={<Jugadores setPlayerOne={setPlayerOne} setPlayerTwo={setPlayerTwo}/>}> </Route>
          <Route path="Cartas" element={<Cartas playerOne={playerOne} playerTwo={playerTwo}/>}> </Route>
          </Route>
        </Routes>
      </IdPlayerProvider>
  );
}

export default App;