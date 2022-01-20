import React from 'react'

// Styles
import { BookmarksStyled } from './bookmarksStyled'
import { CharactersCard } from '../render-characters-card/charactersCardStyled'

function Bookmarks() {
  let localStorageData = localStorage.getItem('BOOKMARKED')

  if (localStorageData !== null) {
    localStorageData = JSON.parse(localStorageData)
  }

  return (
    <BookmarksStyled columnsStyle={localStorageData ? localStorageData : ''}>
      {localStorageData
        ? localStorageData.map((item) => (
            <CharactersCard id={'card'} key={item.id}>
              <img
                src={
                  item.thumbnail.path + '/portrait_uncanny.jpg'
                    ? item.thumbnail.path + '/portrait_uncanny.jpg'
                    : null
                }
                alt='card-images'
              />

              <h1>
                {item.thumbnail.path + '/portrait_uncanny.jpg'
                  ? item.name
                  : null}
              </h1>
            </CharactersCard>
          ))
        : null}
    </BookmarksStyled>
  )
}

export default Bookmarks
