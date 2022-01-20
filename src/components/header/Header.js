import React from 'react'

// Styles
import { HeaderStyled } from './headerStyled'
import logo from '../../img/marvel-logo.png'

const Header = () => {
  return (
    <HeaderStyled>
      <img src={logo} alt='logo' />
    </HeaderStyled>
  )
}

export default Header
