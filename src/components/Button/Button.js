import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <>
            <div className='Button'>
                {props.buttonText}
            </div>
            <div className='Button'>
                {props.children}
            </div>
        </>
    )
}

export default Button

//childern prop get passed in a react component when it has a closing tag