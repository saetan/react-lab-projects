import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import stocks from './stock-data'

const Stock = props => {

  const stock = 'https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=https://financialmodelingprep.com/api/v3/stock/actives?apikey=8868342c86648b5a8751dfcab05eb447'
  const params = useParams();
  const [chosenStock, setStock] = useState({ lastPrice: 0, name: "temp" });

  // useEffect(() => {
  //   const stockArray = stocks.filter((record) => {
  //     return record.symbol === params.symbol;
  //   })

  //   setStock(stockArray[0]);
  // }, [params])

  return (
    <div>
      <h3>Name: {props.chosenStock.companyName}</h3>
      <h3 className="price">Price: {`$${props.chosenStock.price}`}</h3>
    </div>
  )
}


export default Stock