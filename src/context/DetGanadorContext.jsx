import { createContext,useContext,useState } from "react";
import IdPlayerContext from "../context/IdPlayerContext";
import axios from "axios";


const DetGanadorContext = createContext();

const DetGanadorProvider = ({children}) =>{
    const { IdPlayerOne, IdPlayerTwo } = useContext(IdPlayerContext);
    const [winner, setWinner] = useState([]);
    const [deckPlayerOne, setDeckPlayerOne] = useState([]);
    const [deckPlayerTwo, setDeckPlayerTwo] = useState([]);

    

    const getCard = async () => {
        const url = `https://deckofcardsapi.com/api/deck/${IdPlayerOne}/draw/?count=1`;
        const { data } = await axios.get(url);
    
        //setWinner(0);
        /* console.log(winner.length) */
        
        if (winner.length < 8){
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

    }
        else {
            console.log("Soy el else")
            deckPlayerOne.splice(2, 1, data.cards[0]);
          /* let y = 0;
          let banderaPrueba = false;
          while (y < deckPlayerOne.length && banderaPrueba === false) {
             const prueba = deckPlayerOne.filter(
              (varPrueba) => varPrueba.value === deckPlayerOne[y].value
            );
            if(prueba.length<3){
                deckPlayerOne.splice(y, 1, data.cards[0]);
                banderaPrueba = true;
                
            }else{
                y=y+1;
            }
          } */

        }
        

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


      const data = { getDeckPlayerOne, getDeckPlayerTwo,getCard,deckPlayerOne,deckPlayerTwo };

    return(
        <DetGanadorContext.Provider value={data}>
            {children}
        </DetGanadorContext.Provider>

    )
}
export default DetGanadorContext;
export {DetGanadorProvider};