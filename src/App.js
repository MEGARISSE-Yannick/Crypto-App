import { useEffect, useState } from "react";
import Axios from 'axios';
import Coin from './components/Coin.js';
import "./App.css";

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  // definition Coin 
  useEffect(() => {//lancement immediat de la fonction au lancement de la page
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=")
      .then((response) => {
        setListOfCoins(response.data.coins)
      })
  }, []);

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());

  });


  return (
    <div className="App">
      <div className="Header"></div>
      <div className="cryptoHeader">
        <h1 className="title"> Visionneur de crypto</h1>
        <input
          type="text"
          placeholder="Selectionne une crypto"
          onChange={(event) => {
            setSearchWord(event.target.value);
          }}
        />
      </div>
      <div className="cryptoDisplay">
        {filteredCoins.map((coin) => {
          return <Coin
            name={coin.name}
            icon={coin.icon}
            price={coin.price}
            priceBtc={coin.priceBtc}
            symbol={coin.symbol}
            id={coin.id}
            rank={coin.rank}
            websiteUrl={coin.websiteUrl}
            priceChange1h={coin.priceChange1h}
            priceChange1d={coin.priceChange1d}
            priceChange1w={coin.priceChange1w}
          />;
        })}
      </div>
    </div>

  );
}
export default App;