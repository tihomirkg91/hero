import React from 'react'
import { setDataToLocalStorage } from '../../local-storage/setDataToLocalStorage'

// Styles
import { CharactersCard } from './charactersCardStyled'

const RenderCharactersCard = ({ item }) => {
  return (
    <CharactersCard onClick={() => setDataToLocalStorage(item)}>
      <img
        src={
          item.thumbnail.path + '/portrait_uncanny.jpg'
            ? item.thumbnail.path + '/portrait_uncanny.jpg'
            : null
        }
        alt='card-images'
      />
      <h1>
        {item.thumbnail.path + '/portrait_uncanny.jpg' ? item.name : null}
      </h1>
    </CharactersCard>
  )
}

export default RenderCharactersCard
