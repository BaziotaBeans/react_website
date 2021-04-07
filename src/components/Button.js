import React from 'react'
import '../css/Button.css';

const Button = (props) => {
    const {color, text} = props;
    return (
        <button className={`btn ${color == 'blue' ? 'btn-blue' : 'btn-white'}`}>
            {text}
        </button>
    )
}

export default Button;
