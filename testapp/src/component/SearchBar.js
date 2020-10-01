import React from 'react';
export const SearchBar=({text,onTypeHandler})=>{
    return(
        <input 
            className={'search-bar'}
            type={'text'}
            id={'searchBar'}
            value={text}
            onChange={e => onTypeHandler(e)}
            placeholder = 'Search'
        />
    )
}