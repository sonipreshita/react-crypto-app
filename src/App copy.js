import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Sidebar from './Common/SideBar';
import Coin from './Coin';


function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data)
        console.log(res.data)
      }).catch(error => console.log(error))
  }, [])
  const handleChange = e => {
    setSearch(e.target.value)
  }
  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div className="crypto coin-app">
      <Sidebar />
      <div className="coin-search">
        {/* <h1 className="coin-text">Search your desired coin</h1> */}
        <form action="">
          <input type="text" className="coin-input" placeholder="Provide the coin name" onChange={handleChange} />
        </form>
      </div>
      <div className="coin-search">

        <div>Name</div>
        <div>Price</div>
        <div>Price Change</div>
        <div>Market Value</div>

      </div>

      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            pricechange={coin.price_change_percentage_24h}
          //           volume={coin.total_volume}
          />
        );
      })}


    </div>
  );
}

export default App;
