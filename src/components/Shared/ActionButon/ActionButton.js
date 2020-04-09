import React from 'react'

import './ActionButton.css'

const ActionButton = (props) => {
    return (
        <button type='button' onClick={props.onUserClick}>{props.txt}</button>
    )
}

export default ActionButton