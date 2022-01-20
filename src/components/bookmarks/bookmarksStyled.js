import styled from 'styled-components'
import { HeaderStyled } from '../header/headerStyled'

export const BookmarksStyled = styled(HeaderStyled)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  img {
    min-height: 150px;
    max-height: 150px;
  }

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
    display: grid;
    gap: 1rem;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    display: grid;
    gap: 1rem;
  }
`
