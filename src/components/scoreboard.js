import React, { useState, useEffect } from 'react';
import ScoreDisplay from './score-display.js';
import style from '../styles/scoreboard.css'; // Remember to go UP a level in the directory!

const Scoreboard = (props) => {
    const [currentScore, setCurrentScore] = useState(props.current)
    const [highScore, setHighScore] = useState(props.high)
    const [level, setLevel] = useState(props.currentLevel)
    
    useEffect(() => {
        // console.log("SB score", props.current)
        setCurrentScore(props.current)
        setHighScore(props.high)
        setLevel(props.currentLevel)
    }, [props.current, props.high, props.currentLevel])

    return (
        <div className="scoreboard">
            <h1 className="game-title">Memory Game</h1>
            <h2 className="current-level">Level {level}</h2>
            <div className="scores">
                <h1 className="current-score">Current Score: {currentScore}</h1>
                <h1 className="high-score">High Score: {highScore}</h1>
            </div>
        </div>
    )
}

export default Scoreboard;