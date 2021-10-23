import React, { useEffect, useState } from "react";
import stocks from "./stock-data";
import { Link } from "react-router-dom"

function Dashboard(props) {

  const activeStocks = 'https://financialmodelingprep.com/api/v3/stock/actives?apikey=8868342c86648b5a8751dfcab05eb447'

  const [fetchedStock, setStock] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(activeStocks);
      const data = await response.json();
      console.log(data.mostActiveStock);
      setStock(data.mostActiveStock);
    }

    fetchData();
  }, []);

  let stockLists = fetchedStock.map((item, index) => {
    return (
      <tr key={index}><td><Link to={"/stock/" + item.ticker} onClick={() => {
        props.setChosenStock(item);
      }}>{`${item.companyName} (${item.ticker})`}</Link></td><td>{item.price}</td><td style={
        item.changes > 0 ? { color: "green" } : { color: "red" }
      }>{item.changes + "%"}</td></tr>
    )
  })
  // let stockLists = stocks.map((item, index) => {
  //   return (
  //     <tr key={index}><td><Link to={"/stock/" + item.symbol}>{`${item.name} (${item.symbol})`}</Link></td><td>{item.lastPrice}</td><td style={
  //       item.change > 0 ? { color: "green" } : { color: "red" }
  //     }>{item.change.toFixed(2) + "%"}</td></tr>
  //   )
  // })
  return (
    <>
      <h1>Dashboard Page</h1>
      <table>
        <tr>
          <th>Company Name</th>
          <th>Price</th>
          <th>Change</th>
        </tr>
        {stockLists}
      </table>
    </>
  );
}

export default Dashboard
