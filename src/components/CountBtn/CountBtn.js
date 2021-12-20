import React, { useState, useEffect } from 'react';
import './CountBtn.css'

const CountButton = (props) => {
//prop is a external value that you pass into the component which the component will use to inform what it does

    // let count = 0;

    //state is a value internal to the component
    //react hooks help us to tell react that the value has been updated and to take that value
    //we do this using useState
    const [count, setCount] = useState(0)
    //useState gives two values [actualValue, FunctionalValue/method]
    // actualValue is the JSX value
    // FunctionalValue tells react to update the value

    const handleCount = () => {
        setCount(count + props.incrementBy)
    }

    const btnStyle = {
        backgroundColor : props.btnColor,
        borderRadius : '10px',
    }


    //Use effect hooks is a hook which allows us to respond to diff events that happens in life cycle of a component
    //It allow us to run code when a piece of state updates or whenever it initially loads
    //takes two parameters 1.Callback Function  2.
    // syntax:   useEffect( () => {}, [])
    //perfect for loading data
    useEffect( () => {
        console.log('Only called when component mounts')
    }, [])

    useEffect( () => {
        console.log('Called when component is mounted or the count is updated')
        if(count === 15){
            alert('the count is 15')
            alert('count will reset now')

            setCount(0)
        }
    }, [count])



    return (
        <div>
            <button onClick={handleCount} style={btnStyle}>+{props.incrementBy}</button>
            <div className="count-disp" >{count}</div>
        </div>
    )

}

export default CountButton

