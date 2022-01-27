import React from 'react';
import modalStyle from '../styles/modal.css'

const Modal = (props) => {

    function closeModal() {
        const modal = document.querySelector('.modal')
        modal.style.display = 'none';
        console.log("Closing modal")
    }
    
    return(
        <div className="modal">
            <div className="text-box">
                <button className="close-btn" onClick={closeModal}>X</button>
                <h1>Welcome!</h1>
                <p>Welcome to the Mario Memory card game!</p>
                <p>
                    The goal of the game is to click as many cards
                    as possible WITHOUT clicking the same card twice!
                    Each level of the game adds 9 cards to the total card count,
                    and you must click EVERY card from that level to advance.
                    Be careful though, the higher level you go, the more cards
                    get added to your clicked cards list, and that is cumulative!
                </p>
            </div>
            
        </div>
    )
}

export default Modal