import { useState } from 'react';
import './App.css';
import Cartas from './components/Cartas'
import Header from './components/Header';
import Jugadores from './components/Jugadores';
import { Routes,Route } from "react-router-dom";



function App() {
  const [playerOne, setPlayerOne] = useState('')
  const [playerTwo, setPlayerTwo] = useState('')



  
  return (
    <Routes>
       <Route path="/" element={<Header/>}>
       <Route path="/" element={<Jugadores setPlayerOne={setPlayerOne} setPlayerTwo={setPlayerTwo} />}> </Route>
       <Route path="Cartas" element={<Cartas playerOne={playerOne} playerTwo={playerTwo} />}> </Route>

       </Route>


    </Routes>
  );
}

export default App;
