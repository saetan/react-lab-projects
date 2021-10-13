import React, { useState } from 'react';
import './styles.css';
import cardData from './cardData';
import Card from './Card'

export default function App() {
  const [isFlipped, setFlipped] = useState([false, false, false, false]);

  const flipCard = (event) => {
    if (event.target.className === "card") {
      isFlipped.splice(event.target.id, 1, !isFlipped[event.target.id]);
      console.log(isFlipped);
      setFlipped([...isFlipped]);
    }
  }

  const renderCards = () => {
    return cardData.map((record, index) => {
      return <Card key={index} id={index} isFlipped={isFlipped[index]} {...record} />
    })
  }

  return (
    <div className="App">
      <header>
        <h1>Memory Game</h1>
        <nav>
          <a href="#instructions">Instructions</a>
          <a href="#game-board">Game</a>
        </nav>
      </header>

      <main>
        <h2 id="instructions">Instructions</h2>
        <p>Concentration, also known as Match Match, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs, is a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn.The object of the game is to turn over pairs of matching cards.</p>

        <div id="message"></div>
        <div id="game-board" className="board" onClick={flipCard}>
          {
            cardData.map((record, index) => {
              return <Card key={index} id={index} isFlipped={isFlipped[index]} {...record} />
            })
          }
        </div>
      </main >

      <footer className="clearfix">
        <p className="copyright">COPYRIGHT 2017</p>
        <p className="message">
          Created with &hearts; by <span className="name">GA</span>
        </p>
      </footer>

    </div >
  );
}


