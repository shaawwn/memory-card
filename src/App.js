// import fs from 'fs';
// import fs from 'fs';
import React , { useState, useEffect }from 'react';
import Image from './components/images/75.png'; // Need to get all the images from the folder
// import style from './styles/cards.css';
import getImages from './get-images.js';
import style from './styles/style.css';
import Card from './components/card.js';
import uniqid from 'uniqid';
import Scoreboard from './components/scoreboard.js';
import Gameboard from './components/gameboard.js';

// Reader stack overflow https://stackoverflow.com/questions/57161839/module-not-found-error-cant-resolve-fs-in
// const fs = require('fs')

function App() {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0)
  const [level, setLevel] = useState(1)

  // Cards
  const imageList = getImages(100);
  const [cardLevelPool, setCardLevelPool] = useState([])


  const images = loadImages()

  function loadImages() {
    let images;
    try {
      images = require.context('./images', true)
    } catch {
      images = () => {
        return false
      }
    }
    return images
  }

  function updateScore() {
    setScore(score + 1)
    // console.log("APPs score:", score)
  }

  function resetGame() {
    // When the player loses, reset to level 1, set current score to 0, check high score
    console.log("Resetting game!", score, highScore)
    if(score > highScore) {
      setHighScore(score)
    }
    setLevel(1)
    setScore(0)
  }

  function advanceLevel() {
    // Move up to the next level
    setLevel(prevLevel => prevLevel + 1)
  }
  
  useEffect(() => {
    // console.log("Effect")
    // let cards = randomizeCards()
  //   for(let i = 0; i < level; i++) {
  //     getCardLevelPool(level)
  //     // setCurrentCards(randomizeCards(level))
  // }
  }, [])

  return (

    <div className="App">
      <Scoreboard current={score} high={highScore} currentLevel={level}/>
      <Gameboard currentLevel={level} updateScore={updateScore} resetGame={resetGame} cards={cardLevelPool} advanceLevel={advanceLevel} />

    </div>
  );
}

export default App;
