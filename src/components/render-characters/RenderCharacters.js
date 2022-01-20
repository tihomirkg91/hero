import React, { useContext } from 'react'
import RenderCharactersCard from '../render-characters-card/RenderCharactersCard'
import Bookmarks from '../bookmarks/Bookmarks'
import { StateContext } from '../../context/StateContext'

// Styles
import { CharactersStyled } from './charactersStyled'

const RenderCharacters = () => {
  const { items, textInput } = useContext(StateContext)
  if (textInput.length > 0) {
    return (
      <CharactersStyled>
        {items.map((item) => (
          <RenderCharactersCard key={item.id} item={item} />
        ))}
      </CharactersStyled>
    )
  } else
    return (
      <section className='contents'>
        <Bookmarks />
      </section>
    )
}
export default RenderCharacters
