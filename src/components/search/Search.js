import React, { useContext } from 'react'
import { StateContext } from '../../context/StateContext'

//Styles
import { SearchStyled } from './searchStyled'

const Search = ({ search }) => {
  const { textInput } = useContext(StateContext)

  return (
    <SearchStyled>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Find a character'
          autoFocus
          onChange={(e) => search(e.target.value)}
          value={textInput}
        />
      </form>
    </SearchStyled>
  )
}

export default Search
