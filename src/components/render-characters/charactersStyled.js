import styled from 'styled-components'

export const CharactersStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
    img {
      max-width: 280px;
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    img {
      max-width: 280px;
    }
  }
`
