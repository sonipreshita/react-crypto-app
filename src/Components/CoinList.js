import React, { useEffect, useState } from 'react';
import '../App.css';
import {
  CDBTable,
  CDBTableHeader,
  CDBTableBody,
} from "cdbreact";
import axios from 'axios'
import Sidebar from "../Common/SideBar";

function CoinList() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data)
      }).catch(error => console.log(error))
  }, [])
  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )
  const handleChange = e => {
    setSearch(e.target.value)
  }
  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div style={{ flex: "1 1 auto", display: "flex", flexFlow: "column", height: "100vh", overflowY: "hidden" }}>
        <div className="coin-search">
          {/* <h1 className="coin-text">Search your desired coin</h1> */}
          <form action="">
            <input type="text" className="coin-input" placeholder="Search With Coin Name" onChange={handleChange} />
          </form>
        </div>

        <div style={{ height: "100%" }}>
          <div style={{ padding: "20px 5%", height: "calc(100% - 64px)", overflowY: "scroll" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(1, minmax(200px, 700px))" }}></div>
            <div className="mt-5">
              <h4 className="font-weight-bold mb-3">Popular Crypto Coins</h4>
              <CDBTable hover responsive>
                <CDBTableHeader>
                  <tr>
                    <th>Icons</th>
                    <th>Name</th>
                    <th>Price(USD)</th>
                    <th>Mkt Cap(USD)</th>
                    <th>Price Change</th>
                  </tr>
                </CDBTableHeader>
                <CDBTableBody>
                  {filteredCoins.map(coin => {
                    return (<tr>
                      <td><img src={coin.image} alt="crypto" /></td>
                      <td>{coin.name}</td>
                      <td>{coin.current_price}</td>
                      <td>{coin.market_cap}</td>
                      {coin.price_change_percentage_24h < 0 ? (
                        <td><p className="redcolor">{coin.price_change_percentage_24h.toFixed(2)}%</p></td>
                      ) : (
                        <td><p className="greencolor">{coin.price_change_percentage_24h.toFixed(2)}%</p></td>
                      )}
                    </tr>)
                  })}
                </CDBTableBody>
              </CDBTable>
            </div>
          </div>
          <footer className="mx-auto my-3 text-center">
            <small>&copy; Preshita, 2024. All rights reserved.</small>
          </footer>
        </div>
      </div>
    </div>

  );
}

export default CoinList;
