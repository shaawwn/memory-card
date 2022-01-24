import React, { useState, useEffect } from 'react';
import Card from './card.js';
import getImages from '../get-images.js';
import uniqid from 'uniqid';
import cardStyle from '../styles/cards.css';
import boardStyle from '../styles/gameboard.css';
import Luigi from './images/1.png';

const Gameboard = (props) => {
    const imageList = getImages(100) // Get the file names for images
    const [clickedCards, setClickedCards] = useState([]);
    const [level, setLevel] = useState(props.currentLevel)
    const [cardLevelPool, setCardLevelPool] = useState([]) // Default level 1 use cards 1-9.png
    const [currentCards, setCurrentCards] = useState(() => {
        return props.cards
    })

    // const imageList = getImages(10) // Get the file names for images
    const images = loadImages()

    function loadImages() {
        // require.context does not work in testing suite
        let images;
        try {
            images = require.context('./images', true)
        } catch {
            images = () => {
                // console.log("require.context error not a function")
                return false
            }
        }
        return images
    }

    function getCardLevelPool(level) {
        let cardPool = []
        const poolSize = 9 * level
        for(let i = 1; i <= poolSize; i++) {
            cardPool.push(imageList[cardLevelPool.length + i])
        }
        setCardLevelPool(cardLevelPool.concat(cardPool))
    }

    function addCardsToBoard() {
        // using the card pool, select 9 random cards and place them randomly on the board
        // given cardPool.length, select 9 random integers and use those returns to get random cards
        // let cards = 
        console.log("In gameboard", props.cards)
        let cards = props.cards
        cards.map((img, i) => {
            try {
                let newImage =  images(img)
                return <Card image={newImage} key={uniqid()} class={i} onClick={handleClick} />
            } catch {
                console.log("No such image")
            }
            })
        // return cards
    }


    function randomizeCards(level) {
        const numCards = 9 * level
        let randomCards = []
        let alreadyChosen = []
        for(let i = 1; i < 10; i++) {
            let randomCard = Math.floor(Math.random() * (9 * level))// random # for index (0-level)
            while(alreadyChosen.includes(randomCard)) {
                randomCard = Math.floor(Math.random() * (9 * level))
                if(!alreadyChosen.includes(randomCard)) {
                    alreadyChosen.push(randomCard)
                    break
                }
            }
            alreadyChosen.push(randomCard)
            randomCards.push(cardLevelPool[randomCard]);
        }
        // console.log("Random cards", randomCards)
        return randomCards
    }
    function handleClick(cardID) {
        // Change the score, set card state (set state in card component)
        // console.log("GB: Card is clicked", cardID)
        if(clickedCards.includes(cardID)) {
            // Reset game to level 1, clear out clicked cards
            alert("Game over man!")
            setClickedCards([]) 
            props.resetGame()
            return false
        } 
        setClickedCards(
            clickedCards.concat([cardID])
        )
        console.log(clickedCards)
        props.updateScore()
    }

    useEffect(() => { // Runs everytime component renders
        for(let i = 0; i < props.currentLevel; i++) {
            getCardLevelPool(props.currentLevel)
        }
        console.log("clickedCards", clickedCards)
        if(clickedCards.length === 9 * level) {
            alert("You can move to next level!")
            props.advanceLevel()
        }
    }, [clickedCards]) // this array is a check for whether component shoudll re-render, it is previous render

    return(
        <div className="gameboard"
            data-testid="gameboard">
            {/* {cardLevelPool.map((img, i) => { // Change imageList to 10 randomly chosen cards from pool */}
            {randomizeCards(props.currentLevel).map((img, i) => {
            try {
                let newImage =  images(img)
                return <Card image={newImage} key={uniqid()} class={i} onClick={handleClick} />
            } catch {
                console.log("No such image")
            }
            })}
            {/* {addCardsToBoard()} */}
        </div>
    )
}

export default Gameboard