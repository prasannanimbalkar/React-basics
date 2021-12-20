
import React, { useState, useEffect } from 'react';
import CountButton from './CountBtn/CountBtn'
import SearchBar from './SearchBar/SearchBar'
import Button from './Button/Button'


//components using functions
const App = () => {

    const [productsState, setProductState] = useState([])
    const [itemsState, setItemState] = useState([])
  
    //we r using useEffect as when data for search is comming from an external source it might take some tie to load
    //so we keep data in a state so that it can be used
    useEffect(() => {

      fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((productsArray) => {
              const newProductsState = productsArray.map((product) => {
                return product.title;
              })
              setProductState(newProductsState)
            })
    }, [productsState])
  

    useEffect(() => {
      //setTimeout takes two arguments (function, milliseconds)
      setTimeout(() => {
        setItemState([
          'bread',
          'biscuits',
          'butter',
          'banana'
          ])
      }, 5000)
    }, [itemsState])

    const hasItems = itemsState.length > 0
    const hasProducts = productsState.length > 0

    return (
      <div>
        <Button buttonText={'myButton'}/>
        <Button> children props </Button>

        <CountButton incrementBy={1} btnColor={'yellow'}/>
        <CountButton incrementBy={5} btnColor={'orange'}/>
        
        <SearchBar products={[
                    'bread',
                    'biscuits',
                    'butter',
                    'banana'
                ]}/>
        {hasItems ? <SearchBar products={itemsState}/> : 'Loading...'}
        {hasProducts ? <SearchBar products={productsState}/> : 'Loading...'}
        {/* <SearchBar products={productsState}/> */}
        
      </div>
    ) 
    
} 

//export so that it is avaliable to other files
export default App

//prop is a value that you pass into the component which the component will use to inform what it does
//incrementBy={1} is a prop

//ternary operators
// conditional ? expression_when_true : expression_when_false;
