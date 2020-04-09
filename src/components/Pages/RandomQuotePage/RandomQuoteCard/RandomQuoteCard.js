import React from 'react'

import './RandomQuoteCard.css'

const RandomQuoteCard = (props) => {
    return (
        <div className="randomCardContainer">
            {/* if error display error, else display content (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_conditionnel) */}
            {props.error !== '' ? (<p className="error">{props.error}</p>) : (<p className="content">{props.quote.content}</p>)}
            <p className="author">{props.quote.author}</p>
        </div>
    )
}

export default RandomQuoteCard
