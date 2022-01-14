import React, { useState, useEffect } from 'react';

const Card = (props) => {

    const [clicked, setClicked] = useState(false)

    return(
        <div className="card">
            {/* {console.log(typeof props.image)} */}
            <img src={props.image}/> 
        </div>
    )
}

export default Card