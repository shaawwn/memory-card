import React, { useState, useEffect } from 'react';

const Card = (props) => {
    // props.image is img ref, props.class is 1-9 id of card displayed
    const [clicked, setClicked] = useState(false)

    function clickCard(e) {
        e.stopPropagation() // To prevent element behind card form also being clicked
        console.log(e.target.id)
        props.onClick(parseId(e.target.id)) // Something here is causing state not to change
    }

    function resetCard() {
        setClicked(false)
    }

    function parseId(source) {
        let rawId = source.split('/')[3]
        return rawId.split('.')[0]
    }
    // useEffect(() => {
    //     // setClicked(false)
    //     // console.log("Card has been clicked", clicked)
    // }, [clicked])

    return(
        <div className="card" onClick={clickCard}>
            {/* {console.log(typeof props.image)} */}
            <img 
                data-testid="card"
                className={`card-img item-${props.class}`}
                src={props.image}
                alt={props.class}
                onClick = {clickCard}
                id={props.image}
                /> 
        </div>
    )
}

export default Card