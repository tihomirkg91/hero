import React, { useEffect, useState, useCallback } from 'react'

import axios from 'axios'
import { StateContext } from './context/StateContext'
import { URL } from './api/api'

// Styles
import './App.css'
import { AppStyled } from './appStyled'

// Components
import Header from './components/header/Header'
import Search from './components/search/Search'
import RenderCharacters from './components/render-characters/RenderCharacters'

// App
const App = () => {
  const [items, setItems] = useState([])
  const [textInput, setTextInput] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(URL(textInput))
        setItems(result.data.data.results)
      } catch (err) {
        console.log(err)
      }
    }

    if (textInput.length > 0) {
      fetchData()
    }
  }, [textInput])

  const onSearch = useCallback(
    (text) => {
      setTextInput(text)
    },
    [textInput]
  )

  return (
    <StateContext.Provider value={{ textInput, items }}>
      <AppStyled>
        <Header />
        <Search search={onSearch} />
        <RenderCharacters />
      </AppStyled>
    </StateContext.Provider>
  )
}

export default App
