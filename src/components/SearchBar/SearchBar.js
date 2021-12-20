import React, { useState } from 'react';
import './SearchBar.css';

// const products = [
//     'bread',
//     'biscuits',
//     'butter',
//     'banana'
// ]
//passing as props

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState('')

    const handleChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleClear = () => {
        setSearchValue('')
    }

    const shouldDisplayBtn = searchValue.length > 0

    //filter filters the array of products based on the content of search
    const filteredProducts = props.products.filter((item) => {
        return item.includes(searchValue)
    })

    return(
        <div>
            <input type="text" placeholder="" value={searchValue} onChange={handleChange}/>
            
            {shouldDisplayBtn &&    <button onClick={handleClear}>Clear</button>}
            {/* when ever shouldDisplayBtn is true it displays button */}

            <ul>
                {filteredProducts.map((list) => {
                    return(
                        <li key={list}>{list}</li>
                    )
                })}
            </ul>
            {/* //map allows us to take all elements in an array and map them in a different array
            //key is a unique identifier react is using. used while mapping */}

        </div>
    )
}

export default SearchBar

