import React, { useState, useEffect } from 'react';

const ScoreDisplay = (props) => {
    const [score, setScore] = useState(props.score)

    return (
        <div class="score-display">
            <h3>{props.displayTitle}</h3>
        </div>
    )
}

export default ScoreDisplay